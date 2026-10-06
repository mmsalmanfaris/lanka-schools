/**
 * Utility functions for distance calculations and text normalization
 */

/**
 * Calculates great-circle distance between two points on the Earth's surface using the Haversine formula
 * @returns Distance in kilometers
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's mean radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 100) / 100;
}

/**
 * Normalizes a string for search matching (lowercase, strips accents and extra punctuation)
 */
export function normalizeText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Checks if search text fuzzy matches target text
 */
export function matchesQuery(target: string, query: string): boolean {
  if (!target || !query) return false;
  const normTarget = normalizeText(target);
  const normQuery = normalizeText(query);
  if (normTarget.includes(normQuery)) return true;

  // Word-by-word match
  const queryWords = normQuery.split(' ').filter(Boolean);
  return queryWords.every((w) => normTarget.includes(w));
}

