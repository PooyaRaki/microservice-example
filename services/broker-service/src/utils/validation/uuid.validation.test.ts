import { randomUUID } from 'crypto';
import { IsUUID } from './uuid.validation';

test('Should return true when a valid uuid is passed', () => {
    const input = randomUUID();

    const result = IsUUID(input);

    expect(result).toBe(true);
});

test('Should return false when an invalid uuid is passed', () => {
    const input = 'sdfsdf-322424-sdf-234-dfxxcvxcvwer';

    const result = IsUUID(input);

    expect(result).toBe(false);
});