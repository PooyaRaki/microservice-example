/**
 * Checks if the string is a valid uuid
 *
 * @param  {string} uuid UUID
 * @returns {boolean} True if the string is a valid uuid, otherwise false
 */
export const IsUUID = (uuid: string): boolean => {
    const uuidArray = uuid.split('-');

    return uuid.length === 36 &&
        uuidArray[0].length === 8 &&
        uuidArray[1].length === 4 &&
        uuidArray[2].length === 4 &&
        uuidArray[3].length === 4 &&
        uuidArray[4].length === 12
    ;
}