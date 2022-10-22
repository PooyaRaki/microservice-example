export interface IRequestMessage {
    readonly id: number;
    readonly token: string;
    readonly createdAt: string;
    readonly updatedAt: string;

    message: string;
}