import { ClientProviderOptions, Transport } from "@nestjs/microservices";

export const AppMicroservice: ClientProviderOptions = {
    name: 'BROKER_SERVICE',
    transport: Transport.RMQ,
    options: {
        noAck: true,
        urls: process.env.BROKER_SERVICE_URL?.split(','),
        queue: process.env.BROKER_SERVICE_QUEUE || 'QUEUE_BROKER',
        queueOptions: {
            durable: true,
        }
    }
}