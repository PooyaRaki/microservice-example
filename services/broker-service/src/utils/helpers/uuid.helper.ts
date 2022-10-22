import { randomUUID } from 'crypto';

/**
 * Generates a new UUID
 * 
 * @returns {string} random uuid
 */
export const UUID = (): string => randomUUID();