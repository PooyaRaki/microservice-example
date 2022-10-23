import { ArrayRandom } from "./arrayRand.helper";

test('Should return a random item of the array', () => {
    const items = [ 'a', 'b', 'c', 'd' ];

    const action = ArrayRandom(items);

    expect(items.includes(action));
});

test('Should return an empty string if the array length is 0', () => {
    const items: string[] = [];

    const action = ArrayRandom(items);

    expect(action).toBeFalsy();
});