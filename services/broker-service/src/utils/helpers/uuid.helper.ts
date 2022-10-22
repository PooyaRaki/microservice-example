import { randomUUID } from 'crypto';

export const UUID = (): string => {
    return randomUUID();
}