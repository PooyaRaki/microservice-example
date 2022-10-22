import { Channel } from 'amqplib';
import { AppConfig } from '@utils/configs';
import { ParseMessage } from '@utils/helpers';
import { RabbitMQService } from '@components/rabbitmq';
import { AppMicroservice } from '@utils/configs/microservice';
import { RequestMessageService } from '@components/requestMessage';
import { IRequestMessage } from '@components/requestMessage/interfaces';

/**
 * Fetch message from broker on an interval
 *
 * @returns {Promise<void>}
 */
export const FetchMessage = async (): Promise<IRequestMessage> => {
    const broker = new RabbitMQService(AppMicroservice.url);
    const channel = await (await broker.connect()).join(AppMicroservice.queue);

    const message = await fetchMessageByInterval(channel);

    return message;
}

/**
 * Wraps message fetch interval into a promise
 * @param  {number} timer Timer
 * @param  {Channel} channel Channel
 * 
 * @returns {Promise<IRequestMessage>} Request message object
 */
export const fetchMessageByInterval = async (channel: Channel): Promise<IRequestMessage> => {
    let timer = 0;
    const fetchInterval = AppConfig.fetchInterval;
    return new Promise<IRequestMessage>((resolve: Function) => {
        const interval: NodeJS.Timeout = setInterval(
            async () =>  {
                const message = await pollMessage(channel, interval);
                await handleNoMessage(message !== false, timer, interval);

                timer += fetchInterval;
                if (message) {
                    resolve(message);
                }
            },
            fetchInterval
        );
    });
}

/**
 * Polls message from broker
 * If the message is fetched clears interval to stop polling
 *
 * @param  {Channel} channel Broker channel
 * @param  {NodeJS.Timeout} interval Interval to be cleared
 *
 * @returns {Promise<boolean>}
 */
const pollMessage = async (
    channel: Channel,
    interval: NodeJS.Timeout,
): Promise<IRequestMessage | false> => {
    const message = await channel.get(AppMicroservice.queue, { noAck: true });
    if (message) {
        const parsedMessage = ParseMessage<IRequestMessage>(message);

        const requestMessageService = (new RequestMessageService());
        const requestMessage = await requestMessageService.fetch(parsedMessage.pattern, parsedMessage.data);

        clearInterval(interval);

        return requestMessage;
    }

    return false;
}

/**
 * Handles empty response and clears interval
 *
 * @param  {boolean} success Whether the message was successfully fetched
 * @param  {number} currentTime Interval timer
 * @param  {NodeJS.Timeout} interval The interval to be cleared
 *
 * @returns {Promise<void>}
 */
const handleNoMessage = async (
    success: boolean,
    currentTime: number,
    interval: NodeJS.Timeout
): Promise<void> => {
    if (currentTime >= AppConfig.fetchTimeout) {
        clearTimeout(interval);

        if (!success) {
            throw new Error('No Response!');
        }
    }
}