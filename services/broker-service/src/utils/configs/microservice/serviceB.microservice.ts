import { ClientProviderOptions, Transport } from "@nestjs/microservices";

export const ServiceBConfig: ClientProviderOptions = {
    name: 'B_SERVICE',
    transport: Transport.RMQ,
    options: {
        urls: process.env.SERVICE_B_URL?.split(','),
        queue: process.env.SERVICE_B_QUEUE || 'QUEUE_B',
        queueOptions: {
            durable: true,
        }
    }
}