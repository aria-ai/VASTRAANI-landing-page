/**
 * Image Utilities for Collections
 * Helpers to dynamically generate image paths based on collection structure
 *
 * Folder convention:
 *   /collections/{collectionName}/{variantId}/{1,2,3...}.webp
 *
 * collectionName examples: "pushpadhara", "jhankaar", "phagun"
 * variantId     examples: "sindoor-red", "jhankaar-royal-plum"
 */

/**
 * Generate image paths for a collection variant
 *
 * @param {string} collectionId  - The variant identifier (e.g. "sindoor-red")
 * @param {number} imageCount    - Number of images
 * @param {string} collectionName - Parent collection folder (e.g. "pushpadhara")
 * @returns {string[]} Array of image paths
 */
export const getCollectionImages = (collectionId, imageCount = 3, collectionName = null) => {
  const basePath = collectionName
    ? `/collections/${collectionName}/${collectionId}`
    : `/collections/${collectionId}`;

  return Array.from(
    { length: imageCount },
    (_, index) => `${basePath}/${index + 1}.webp`,
  );
};

/**
 * Get a single collection image path
 *
 * @param {string} collectionId   - The variant identifier
 * @param {number} imageNumber    - The image number (1-indexed)
 * @param {string} collectionName - Parent collection folder (optional)
 * @returns {string} Image path
 */
export const getCollectionImage = (collectionId, imageNumber, collectionName = null) => {
  const basePath = collectionName
    ? `/collections/${collectionName}/${collectionId}`
    : `/collections/${collectionId}`;

  return `${basePath}/${imageNumber}.webp`;
};

