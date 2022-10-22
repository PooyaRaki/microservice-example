import { Connection, Channel } from 'amqplib';

export interface IApp {
    channel: Channel;
    connection: Connection;
}