import { ClientProviderOptions, Transport } from "@nestjs/microservices";

export const ServiceAConfig: ClientProviderOptions = {
    name: 'A_SERVICE',
    transport: Transport.RMQ,
    options: {
        urls: process.env.SERVICE_A_URL?.split(','),
        queue: process.env.SERVICE_A_QUEUE || 'QUEUE_A',
        queueOptions: {
            durable: true,
        }
    }
}