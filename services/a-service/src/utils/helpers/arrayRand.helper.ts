/**
 * Returns a random value of an array
 *
 * @param  {string[]} items Array
 *
 * @returns {string} Random value
 */
export const ArrayRandom = (items: string[]): string => {
    if (!items.length) {
        return '';
    }

    return items[
        Math.floor(
            Math.random() * items.length,
        )
    ];
}