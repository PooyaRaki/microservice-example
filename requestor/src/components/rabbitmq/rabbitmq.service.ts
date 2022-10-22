import * as RabbitMQServer from 'amqplib';

export class RabbitMQService {
    private readonly _url: string;
    private _connection: RabbitMQServer.Connection;

    public constructor(url: string) {
        this._url = url;
    }

    /**
     * Connects to a rabbitMQ server
     *
     * @returns {Promise<this>}
     */
    public async connect(): Promise<this> {
        this._connection = await RabbitMQServer.connect(this._url);

        return this;
    }

    /**
     * Joins a queue inside a channel
     *
     * @param  {string} queueName Queue name
     *
     * @returns {Promise<Channel>}
     */
    public async join(queueName: string): Promise<RabbitMQServer.Channel> {
        await this.validateConnection();

        const channel = await this._connection.createChannel();
        await channel.assertQueue(queueName);

        return channel;
    }
    /**
     * Checks whetter a connection exists or not
     *
     * @returns {Promise<void>}
     */
    private async validateConnection(): Promise<void> {
        if (!this._connection) {
            throw new Error('Connection is not established yet!');
        }
    }
}