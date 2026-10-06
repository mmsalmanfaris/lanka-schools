/**
 * Utility functions for distance calculations and text normalization
 */
/**
 * Calculates great-circle distance between two points on the Earth's surface using the Haversine formula
 * @returns Distance in kilometers
 */
export declare function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number;
/**
 * Normalizes a string for search matching (lowercase, strips accents and extra punctuation)
 */
export declare function normalizeText(text: string): string;
/**
 * Checks if search text fuzzy matches target text
 */
export declare function matchesQuery(target: string, query: string): boolean;
//# sourceMappingURL=utils.d.ts.map