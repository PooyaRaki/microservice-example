/**
 * Returns a random value of an array
 *
 * @param  {T[]} items Array
 *
 * @returns {T | null} Random value
 */
export const ArrayRandom = <T>(items: T[]): T | null => {
    if (!items.length) {
        return null;
    }

    return items[
        Math.floor(
            Math.random() * items.length,
        )
    ];
}