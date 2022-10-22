import { IMicroserviceResponse } from "@utils/interfaces";
import { ConsumeMessage, GetMessage } from "amqplib";


/**
 * Fetches rabbitmq message content
 *
 * @param  {ConsumeMessage | GetMessage} message RabbitMQ message
 *
 * @returns {IMicroserviceResponse<T>} message content
 */
export const ParseMessage = <T>(message: ConsumeMessage | GetMessage): IMicroserviceResponse<T> => {
    return JSON.parse(message.content.toString());
}