/**
 * Returns a random value of an array
 *
 * @param  {any[]} items Array
 *
 * @returns {any} Random value
 */
export const ArrayRandom = (items: any[]): any => {
    return items[
        Math.floor(
            Math.random() * items.length,
        )
    ];
}