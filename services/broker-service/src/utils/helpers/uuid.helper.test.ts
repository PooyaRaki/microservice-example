import { UUID } from "./uuid.helper"

test('Should return a random string', () => {
    const action = UUID();

    expect(action).toBeTruthy();
});

test('Should return a valid UUID', () => {
    const action = UUID();

    const separatedUUID = action.split('-');

    expect(action).toBeTruthy();
    expect(action).toHaveLength(36);
    expect(separatedUUID[0]).toHaveLength(8);
    expect(separatedUUID[1]).toHaveLength(4);
    expect(separatedUUID[2]).toHaveLength(4);
    expect(separatedUUID[3]).toHaveLength(4);
    expect(separatedUUID[4]).toHaveLength(12);
});