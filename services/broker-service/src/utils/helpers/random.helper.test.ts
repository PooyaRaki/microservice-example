import { RandomAlphaNumericString } from "./random.helper";

test('Should return a string of length 1024', () => {
    const length = 1024;

    const action = RandomAlphaNumericString(length);

    expect(action).toHaveLength(length);
});
test('Should return a string of length 87', () => {
    const length = 87;

    const action = RandomAlphaNumericString(length);

    expect(action).toHaveLength(length);
});
test('Should throw an error if the given length is 0', () => {
    const length = 0;

    const action = () => RandomAlphaNumericString(length);

    expect(action).toThrowError();
});

test('Should throw an error if the given length is -89', () => {
    const length = -89;

    const action = () => RandomAlphaNumericString(length);

    expect(action).toThrowError();
});