#!/bin/bash
# scripts/process-images.sh
#
# Two-step image pipeline:
#   Step 1 — Convert HEIC / JPG / PNG → WebP  (quality 80, max 1600px long edge)
#   Step 2 — Fix any landscape WebPs that should be portrait (rotate 90° CW)
#
# After processing, if the target dir contains images for the hero (home_page),
# a JS manifest is auto-written to src/data/homePageImages.js
#
# Prerequisites: brew install webp  (provides cwebp)
#
# Usage (via npm):
#   npm run images                         # processes ALL of public/
#   npm run images -- public/home_page     # processes only that dir
#   npm run images -- public/home_page --dry-run

set -euo pipefail

# ─── Argument parsing ─────────────────────────────────────────────────────────
TARGET_DIR="public"
DRY_RUN=false

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    --home)    TARGET_DIR="public/home_page" ;;
    --*)       ;;                    # ignore unknown flags
    *)         TARGET_DIR="$arg" ;; # first positional = target dir
  esac
done

QUALITY=80
RESIZE_MAX=1600
MANIFEST_DIR="public/home_page"    # only this dir triggers manifest generation
MANIFEST_OUT="src/data/homePageImages.js"

mode_label=$( $DRY_RUN && echo "DRY RUN — no changes" || echo "LIVE" )

# ─── Sanity checks ────────────────────────────────────────────────────────────
if ! command -v cwebp &> /dev/null; then
  echo "❌ cwebp not found. Install with: brew install webp"
  exit 1
fi

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "❌ Directory not found: $TARGET_DIR"
  exit 1
fi

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║        Vastraani Image Pipeline              ║"
echo "║  Dir  : $TARGET_DIR"
echo "║  Mode : $mode_label"
echo "╚══════════════════════════════════════════════╝"
echo ""

# ─── Step 1: Convert → WebP ───────────────────────────────────────────────────
echo "▶ Step 1 — Convert images to WebP"
echo "  Formats: HEIC · JPG · PNG  |  Quality: $QUALITY  |  Max: ${RESIZE_MAX}px"
echo ""

converted=0

while IFS= read -r src; do
  ext="${src##*.}"
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  webp="${src%.*}.webp"

  # Skip if WebP is already newer than source
  if [[ -f "$webp" && "$webp" -nt "$src" ]]; then
    continue
  fi

  orig_kb=$(du -k "$src" | cut -f1)
  rel="${src#public/}"

  if $DRY_RUN; then
    echo "  [DRY] Would convert: $src"
    continue
  fi

  # HEIC → convert to temp JPG first (cwebp doesn't understand HEIC)
  if [[ "$ext_lower" == "heic" ]]; then
    sips -s format jpeg "$src" --out /tmp/_vastraani_input.jpg > /dev/null 2>&1
    cwebp -q "$QUALITY" -resize "$RESIZE_MAX" 0 /tmp/_vastraani_input.jpg -o "$webp" -quiet
  else
    # JPG and PNG are handled directly by cwebp
    cwebp -q "$QUALITY" -resize "$RESIZE_MAX" 0 "$src" -o "$webp" -quiet
  fi

  new_kb=$(du -k "$webp" | cut -f1)
  reduction=$(( (orig_kb - new_kb) * 100 / orig_kb ))
  echo "  ✅ $rel  (${orig_kb}KB → ${new_kb}KB, -${reduction}%)"
  converted=$((converted + 1))

done < <(find "$TARGET_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.heic" \) | sort)

echo ""
echo "  Converted: $converted new file(s)"

# ─── Step 2: Fix landscape WebPs → rotate 90° CW ──────────────────────────────
echo ""
echo "▶ Step 2 — Fix landscape WebPs (rotate 90° CW to portrait)"
echo ""

fixed=0
skipped_no_src=0

while IFS= read -r webp; do
  w=$(sips -g pixelWidth  "$webp" 2>/dev/null | awk '/pixelWidth:/{print $2}')
  h=$(sips -g pixelHeight "$webp" 2>/dev/null | awk '/pixelHeight:/{print $2}')

  [[ -z "$w" || -z "$h" ]] && continue
  (( w <= h )) && continue   # already portrait or square — skip

  # Find the source file (any supported extension)
  src=""
  base="${webp%.webp}"
  for try_ext in jpg jpeg png heic JPG JPEG PNG HEIC; do
    [[ -f "${base}.${try_ext}" ]] && src="${base}.${try_ext}" && break
  done

  if [[ -z "$src" ]]; then
    echo "  ⚠️  No source file for $webp — skipping"
    skipped_no_src=$((skipped_no_src + 1))
    continue
  fi

  src_ext="${src##*.}"
  src_ext_lower=$(echo "$src_ext" | tr '[:upper:]' '[:lower:]')

  if $DRY_RUN; then
    echo "  [DRY] Would rotate: ${webp#public/}  (${w}×${h})"
    continue
  fi

  # Rotate source to temp JPG
  if [[ "$src_ext_lower" == "heic" ]]; then
    sips -s format jpeg "$src" --out /tmp/_vastraani_rotated_src.jpg > /dev/null 2>&1
    sips -r 90 /tmp/_vastraani_rotated_src.jpg --out /tmp/_vastraani_rotated.jpg > /dev/null 2>&1
  else
    sips -r 90 "$src" --out /tmp/_vastraani_rotated.jpg > /dev/null 2>&1
  fi

  cwebp -q "$QUALITY" /tmp/_vastraani_rotated.jpg -o "$webp" -quiet
  echo "  🔄 Fixed: ${webp#public/}  (${w}×${h} → portrait)"
  fixed=$((fixed + 1))

done < <(find "$TARGET_DIR" -name "*.webp" | sort)

[[ $fixed -eq 0 && $skipped_no_src -eq 0 ]] && echo "  ✅ All WebPs already portrait — nothing to fix."

# ─── Step 3: Write hero image manifest (home_page only) ───────────────────────
# Resolves the target dir to a canonical path for comparison
abs_target=$(cd "$TARGET_DIR" 2>/dev/null && pwd)
abs_manifest=$(cd "$MANIFEST_DIR" 2>/dev/null && pwd 2>/dev/null || true)

if [[ -n "$abs_manifest" && "$abs_target" == "$abs_manifest" ]]; then
  echo ""
  echo "▶ Step 3 — Generating hero image manifest"
  echo "  → $MANIFEST_OUT"

  if ! $DRY_RUN; then
    {
      echo "// Auto-generated by \`npm run images\` — do not edit manually"
      echo "// Re-run \`npm run images -- public/home_page\` after adding new hero photos"
      echo ""
      echo "export const homePageImages = ["
      find "$TARGET_DIR" -maxdepth 1 -name "*.webp" | sort | while read -r f; do
        filename="${f#public/}"
        echo "  \"/${filename}\","
      done
      echo "];"
    } > "$MANIFEST_OUT"
    echo "  ✅ Manifest written with $(find "$TARGET_DIR" -maxdepth 1 -name "*.webp" | wc -l | tr -d ' ') image(s)"
  else
    echo "  [DRY] Would write manifest to $MANIFEST_OUT"
  fi
fi

# ─── Summary ─────────────────────────────────────────────────────────────────
echo ""
echo "══════════════════════════════════════════════"
if $DRY_RUN; then
  echo "  Dry run complete. Re-run without --dry-run to apply."
else
  echo "  Converted : $converted file(s) → WebP"
  echo "  Rotated   : $fixed landscape WebP(s) fixed"
  [[ $skipped_no_src -gt 0 ]] && echo "  Skipped   : $skipped_no_src (no source file found)"
fi
echo "══════════════════════════════════════════════"
echo ""
