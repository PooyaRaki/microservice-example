import { Repository } from "typeorm";
import { UUID } from "@utils/helpers";
import { MessageRequest } from "./entities";
import { InjectRepository } from "@nestjs/typeorm";
import { BadRequestException, Injectable } from "@nestjs/common";
import { ICreateMessageRequest, IUpdateMessageRequest } from "./interfaces";

@Injectable()
export class MessageRequestService {
    public constructor(
        @InjectRepository(MessageRequest)
        private readonly MESSAGE_REQUEST_REPOSITORY: Repository<MessageRequest>,
    ) {
        //
    }

    /**
     * Creates a new Request
     *
     * @param  {ICreateMessageRequest} input Request input data
     *
     * @returns {Promise<MessageRequest>} Returns a request object
     */
    public async create(input: ICreateMessageRequest): Promise<MessageRequest> {
        return await this.MESSAGE_REQUEST_REPOSITORY.save({
            token: UUID(),
            message: input.message,
        });
    }

    /**
     * Updates a message request
     *
     * @param  {IUpdateMessageRequest} input Request input data
     *
     * @returns {Promise<boolean>} Returns true if updated, otherwise false
     */
    public async update(input: IUpdateMessageRequest): Promise<boolean> {
        const result = await this.MESSAGE_REQUEST_REPOSITORY
            .createQueryBuilder()
            .update(MessageRequest)
            .set({
                message: input.message,
            })
            .where('token = :token', { token: input.token })
            .execute();

            return result.affected !== undefined && result.affected > 0;
    }

    /**
     * Find a message request by its token
     *
     * @param  {Pick<MessageRequest, 'token'>} input Message Request input data
     *
     * @returns {Promise<MessageRequest | null} Returns message request object, null if token in invalid
     */
    public async findByToken(input: Pick<MessageRequest, 'token'>): Promise<MessageRequest | null> {
        return await this.MESSAGE_REQUEST_REPOSITORY.findOne({
            where: {
                token: input.token,
            },
        });
    }

    /**
     * Find a message request by its token
     *
     * @param  {Pick<MessageRequest, 'token'>} input Message request input data
     *
     * @returns {Promise<MessageRequest | never} Returns message request object
     *
     * @throws {BadRequestException} If the token is invalid throws an error
     */
    public async findByTokenOrFail(input: Pick<MessageRequest, 'token'>): Promise<MessageRequest | never> {
        const request = await this.findByToken(input);

        if (!request) {
            throw new BadRequestException('TOKEN_INVALID'); // @todo Read from error constants
        }

        return request;
    }
}