/**
 * Image Utilities for Collections
 * Helpers to dynamically generate image paths based on collection structure
 */

/**
 * Generate image paths for a collection
 * Assumes images are stored in /collections/{collectionId}/{1,2,3...}.jpg
 *
 * @param {string} collectionId - The collection identifier (e.g., "sindoor-red")
 * @param {number} imageCount - Number of images in the collection
 * @returns {string[]} Array of image paths
 */
export const getCollectionImages = (collectionId, imageCount = 3) => {
  return Array.from(
    { length: imageCount },
    (_, index) => `/collections/${collectionId}/${index + 1}.jpg`,
  );
};

/**
 * Get a single collection image path
 *
 * @param {string} collectionId - The collection identifier
 * @param {number} imageNumber - The image number (1-indexed)
 * @returns {string} Image path
 */
export const getCollectionImage = (collectionId, imageNumber) => {
  return `/collections/${collectionId}/${imageNumber}.jpg`;
};
