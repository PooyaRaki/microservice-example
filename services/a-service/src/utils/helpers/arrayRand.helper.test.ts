import { ArrayRandom } from "./arrayRand.helper";

test('Should return a random item of the array', () => {
    const items = [ 'a', 'b', 'c', 'd' ];

    const action = <string> ArrayRandom(items);
    const action2 = <string> ArrayRandom(items);

    expect(items.includes(action));
    expect(items.includes(action2));
    expect(action).not.toBe(action2);
});

test('Should return null if the array length is 0', () => {
    const items: string[] = [];

    const action = <string> ArrayRandom(items);

    expect(action).toBeNull();
});