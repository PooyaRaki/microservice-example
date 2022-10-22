/**
 * Returns the length of the random string for calculation according to the map length
 *
 * @param  {number} mapLength Map characters length
 * @param  {number} randomLength Random length
 * 
 * @returns {number} the calculated length
 */
const randomLength = (mapLength: number, randomLength: number): number => {
    const calculatedLength = (randomLength > mapLength) ? mapLength : randomLength;

    return Math.floor(Math.random() * calculatedLength);
}

/**
 * Checks whether the length of the string is bigger than zero
 *
 * @param  {number} randomLength Requested random string length
 *
 * @returns {void}
 */
const validateLength = (randomLength: number): void => {
    if (randomLength <= 0) {
        throw new Error('Random string length must be bigger than 0');
    }
}

/**
 * Generates a random string
 *
 * @param  {number} length Random string length
 * @param  {string} map Characters to build the string from
 *
 * @returns {string} A new random string
 */
export const RandomAlphaNumericString = (
    length: number = 10,
    map: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
): string => {
    validateLength(length);

    let result = '';
    for (let index = 0; index < length; index++) {
        result += map.charAt(randomLength(map.length, length));
    }

    return result;
}