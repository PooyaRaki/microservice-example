import * as RabbitMQServer from 'amqplib';

export class RabbitMQService {
    private static _url: string;
    private static _instance: RabbitMQService;
    private _connection: RabbitMQServer.Connection;

    private constructor() {
        //
    }

    /**
     * Returns a new instance of this object only if
     *      it has not been instantiated yet Or
     *      We are trying to connect to a new RabbitMQ server
     *
     * @param  {string} url Connection string
     *
     * @returns {Promise<RabbitMQService>}
     */
    public static async getInstance(url: string): Promise<RabbitMQService> {
        if (this._instance === undefined || this._url !== url) {
            this._url = url;
            this._instance = new RabbitMQService();

            await this._instance.connect(url);
        }

        return this._instance;
    }

    /**
     * Connects to a rabbitMQ server
     * 
     * @param  {string} url RabbitMQ server connection string
     *
     * @returns {Promise<this>}
     */
    public async connect(url: string): Promise<this> {
        this._connection = await RabbitMQServer.connect(url);

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