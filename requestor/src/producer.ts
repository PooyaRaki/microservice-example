import { RabbitMQService } from "@components/rabbitmq";
import { BrokerMicroservice } from "@utils/configs/microservice";
import { RequestMessageService } from "components/requestMessage";

/**
 * Produces a message
 *
 * @param  {string} message Message text
 *
 * @returns {Promise<void>}
 */
export const ProduceMessage = async (message: string): Promise<void> => {
    const broker = new RabbitMQService(BrokerMicroservice.url);
    const channel = await (await broker.connect()).join(BrokerMicroservice.queue);

    channel.sendToQueue(BrokerMicroservice.queue, await buildMessage(message));
}

/**
 * Builds message object which is going to be sent to the queue
 *
 * @param  {string} message Message text
 *
 * @returns {Promise<Buffer>}
 */
const buildMessage = async (message: string): Promise<Buffer> => {
    const messageObject = await (new RequestMessageService()).produce(message);

    return Buffer.from(JSON.stringify(messageObject));
}