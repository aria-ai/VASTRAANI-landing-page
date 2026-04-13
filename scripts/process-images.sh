#!/bin/bash
# scripts/process-images.sh
#
# Two-step image pipeline for new collection photos:
#   Step 1 — Convert all JPGs → WebP (quality 80, max 1600px)
#   Step 2 — Fix any landscape WebPs that should be portrait (rotate 90° CW)
#
# Prerequisites: brew install webp  (provides cwebp)
# Usage:
#   npm run images            — full pipeline
#   npm run images -- --dry-run  — preview only, no files changed

set -euo pipefail

COLLECTIONS_DIR="public/collections"
QUALITY=80
RESIZE_MAX=1600
DRY_RUN=false
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=true

mode_label=$( $DRY_RUN && echo "DRY RUN — no changes" || echo "LIVE" )

# ─── Sanity checks ────────────────────────────────────────────────────────────
if ! command -v cwebp &> /dev/null; then
  echo "❌ cwebp not found. Install with: brew install webp"
  exit 1
fi

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║       Vastraani Image Pipeline ($mode_label)       ║"
echo "╚══════════════════════════════════════════════╝"
echo ""

# ─── Step 1: Convert JPG → WebP ───────────────────────────────────────────────
echo "▶ Step 1 — Convert JPGs to WebP"
echo "  Quality: $QUALITY  |  Max dimension: ${RESIZE_MAX}px"
echo ""

converted=0

while IFS= read -r jpg; do
  webp="${jpg%.*}.webp"

  if [[ -f "$webp" && "$webp" -nt "$jpg" ]]; then
    continue   # already up to date — skip silently
  fi

  orig_kb=$(du -k "$jpg" | cut -f1)

  if $DRY_RUN; then
    echo "  [DRY] Would convert: $jpg"
  else
    cwebp -q "$QUALITY" -resize "$RESIZE_MAX" 0 "$jpg" -o "$webp" -quiet
    new_kb=$(du -k "$webp" | cut -f1)
    reduction=$(( (orig_kb - new_kb) * 100 / orig_kb ))
    echo "  ✅ ${jpg##public/collections/}  (${orig_kb}KB → ${new_kb}KB, -${reduction}%)"
    converted=$((converted + 1))
  fi
done < <(find "$COLLECTIONS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | sort)

echo ""
echo "  Converted: $converted new file(s)"

# ─── Step 2: Fix landscape WebPs → rotate 90° CW ──────────────────────────────
echo ""
echo "▶ Step 2 — Fix landscape WebPs (rotate 90° CW to portrait)"
echo ""

fixed=0
skipped_no_jpg=0

while IFS= read -r webp; do
  w=$(sips -g pixelWidth  "$webp" 2>/dev/null | awk '/pixelWidth:/{print $2}')
  h=$(sips -g pixelHeight "$webp" 2>/dev/null | awk '/pixelHeight:/{print $2}')

  # Not landscape — portrait or square, skip
  [[ -z "$w" || -z "$h" ]] && continue
  (( w <= h )) && continue

  jpg="${webp%.webp}.jpg"
  if [[ ! -f "$jpg" ]]; then
    echo "  ⚠️  No source JPG for $webp — skipping"
    skipped_no_jpg=$((skipped_no_jpg + 1))
    continue
  fi

  if $DRY_RUN; then
    echo "  [DRY] Would rotate: ${webp##public/collections/}  (${w}×${h})"
  else
    sips -r 90 "$jpg" --out /tmp/_vastraani_rotated.jpg > /dev/null 2>&1
    cwebp -q "$QUALITY" /tmp/_vastraani_rotated.jpg -o "$webp" -quiet
    echo "  🔄 Fixed: ${webp##public/collections/}  (${w}×${h} → portrait)"
    fixed=$((fixed + 1))
  fi
done < <(find "$COLLECTIONS_DIR" -name "*.webp" | sort)

[[ $fixed -eq 0 && $skipped_no_jpg -eq 0 ]] && echo "  ✅ All WebPs are already portrait — nothing to fix."

# ─── Summary ─────────────────────────────────────────────────────────────────
echo ""
echo "══════════════════════════════════════════════"
if $DRY_RUN; then
  echo "  Dry run complete. Re-run without --dry-run to apply."
else
  echo "  Converted : $converted JPG(s) → WebP"
  echo "  Rotated   : $fixed landscape WebP(s) fixed"
  [[ $skipped_no_jpg -gt 0 ]] && echo "  Skipped   : $skipped_no_jpg (no source JPG found)"
fi
echo "══════════════════════════════════════════════"
echo ""
