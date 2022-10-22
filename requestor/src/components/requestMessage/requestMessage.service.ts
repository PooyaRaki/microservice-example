import { IMicroservicePayload } from "@utils/interfaces";
import { IRequestMessage, IRequestMessagePayload } from "./interfaces";

export class RequestMessageService {
    private readonly _pattern_consume = 'response.v1.delivered';
    private readonly _pattern_produce = 'message.v1.process';

    /**
     * Fetches microservice request message
     *
     * @param  {string} messagePattern Message pattern
     * @param  {IRequestMessage} message Message content
     *
     * @returns {void}
     */
    public async fetch(messagePattern: string, message: IRequestMessage): Promise<IRequestMessage> {
        this.validateConsumedMessage(messagePattern);

        return message;
    }

    /**
     * Validates microservice message
     *
     * @param  {string} messagePattern Message pattern
     *
     * @returns {void}
     * 
     * @throws {Error} if pattern is invalid throws a new error
     */
    private validateConsumedMessage(messagePattern: string): void {
        if (messagePattern !== this._pattern_consume) {
            throw new Error('Message Not Found!');
        }
    }

    /**
     * Produces a message to the broker
     *
     * @param  {string} message Message to be produced
     *
     * @returns {Promise<IMicroservicePayload<IRequestMessagePayload>>}
     */
    public async produce(message: string): Promise<IMicroservicePayload<IRequestMessagePayload>> {
        return {
            data: { message },
            pattern: this._pattern_produce,
        }
    }
}