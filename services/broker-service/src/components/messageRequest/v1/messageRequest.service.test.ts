import { MessageRequestModuleV1Test } from "./messageRequestTest.module";
import { MessageRequestService } from "./messageRequest.service";
import { IsUUID } from "@utils/validation";
import { getDataSourceToken } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { TestingModule } from "@nestjs/testing";

let connection: DataSource;
let moduleRef: TestingModule;
let messageRequestService: MessageRequestService;

describe('MessageRequestService', () => {
    beforeAll(async () => {
        moduleRef = await MessageRequestModuleV1Test();
        connection = await moduleRef.get(getDataSourceToken());
    });
    beforeEach(async () => {
        messageRequestService = moduleRef.get<MessageRequestService>(MessageRequestService);
    });
    afterAll(async () => {
        connection.destroy();
    });

    test('Should be defined', () => {
        expect(messageRequestService).toBeDefined();
    });

    // ----
    describe('Create()', () => {

        test('Should create a new message request', async () => {
            const input = { message: 'This is a test message' };

            const result = await messageRequestService.create(input);

            expect(result).toBeDefined();
            expect(result).toHaveProperty('id');
            expect(result.message).toBe(input.message);
            expect(IsUUID(result.token)).toBe(true);
        });

        test('Should throw if the message is empty', async () => {
            const input = { message: '' };

            const result = async () => await messageRequestService.create(input);

            expect(result).rejects.toThrowError();
        });
    });

    // ----
    describe('Update()', () => {

        test('Should update a new message request', async () => {
            const messageRequest = await messageRequestService.create({ message: 'This is a test message' });

            const updateInput = { token: messageRequest.token, message: 'This is a test message - UPDATED' };
            const result = await messageRequestService.update(updateInput);

            expect(result).toBeDefined();
            expect(result).toHaveProperty('id');
            expect(result.message).toBe(updateInput.message);

            expect(IsUUID(result.token)).toBe(true);
            expect(result.token).toBe(updateInput.token);
        });

        test('Should throw if the message is empty', async () => {
            const messageRequest = await messageRequestService.create({ message: 'This is a test message' });

            const updateInput = { token: messageRequest.token, message: '' };
            const result = async () => await messageRequestService.update(updateInput);

            expect(result).rejects.toThrowError();
        });
    });

    // ----
    describe('findByToken()', () => {

        test('Should return MessageRequest if a valid token is provided', async () => {
            const messageRequest = await messageRequestService.create({ message: 'TEST' });

            const result = await messageRequestService.findByToken({ token: messageRequest.token });

            expect(result).toBeDefined();
            expect(result).toHaveProperty('id');
            expect(result?.message).toBe(messageRequest.message);
            expect(result?.token).toBe(messageRequest.token);
        });

        test('Should return null if an invalid token is provided', async () => {
            const result = await messageRequestService.findByToken({ token: 'INVALID_TOKEN' });

            expect(result).toBeNull();
        });
    });

    // ----
    describe('findByTokenOrFail()', () => {

        test('Should return MessageRequest if a valid token is provided', async () => {
            const messageRequest = await messageRequestService.create({ message: 'TEST' });

            const result = await messageRequestService.findByTokenOrFail({ token: messageRequest.token });

            expect(result).toBeDefined();
            expect(result).toHaveProperty('id');
            expect(result?.message).toBe(messageRequest.message);
            expect(result?.token).toBe(messageRequest.token);
        });

        test('Should throw an error if an invalid token is provided', async () => {
            const result = async () => await messageRequestService.findByTokenOrFail(
                { token: 'INVALID_TOKEN', },
            );

            expect(result).rejects.toThrowError();
        });
    });
});