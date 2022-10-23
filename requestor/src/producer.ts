import { RabbitMQService } from '@components/rabbitmq';
import { BrokerMicroservice } from '@utils/configs/microservice';
import { RequestMessageService } from 'components/requestMessage';

/**
 * Produces a message
 *
 * @param  {string} message Message text
 *
 * @returns {Promise<void>}
 */
export const ProduceMessage = async (message: string): Promise<void> => {
    const broker = await RabbitMQService.getInstance(BrokerMicroservice.url);
    const channel = await broker.join(BrokerMicroservice.queue);

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