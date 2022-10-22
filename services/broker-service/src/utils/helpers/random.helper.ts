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
    let result = '';
    for (let index = 0; index < length; index++) {
        result += map.charAt(Math.floor(Math.random() * length));
    }

    return result;
}