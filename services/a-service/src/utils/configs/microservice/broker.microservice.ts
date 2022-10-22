import { ClientProviderOptions, Transport } from "@nestjs/microservices";

export const BrokerMicroservice: ClientProviderOptions = {
    name: 'BROKER_SERVICE',
    transport: Transport.RMQ,
    options: {
        urls: process.env.BROKER_SERVICE_URL?.split(','),
        queue: process.env.BROKER_SERVICE_QUEUE || 'QUEUE_BROKER',
        queueOptions: {
            durable: true,
        }
    }
}