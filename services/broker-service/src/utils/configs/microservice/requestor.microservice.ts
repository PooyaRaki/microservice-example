import { ClientProviderOptions, Transport } from "@nestjs/microservices";

export const RequestorMicroservice: ClientProviderOptions = {
    name: 'REQUESTOR_SERVICE',
    transport: Transport.RMQ,
    options: {
        urls: process.env.REQUESTOR_SERVICE_URL?.split(','),
        queue: process.env.REQUESTOR_SERVICE_QUEUE || 'QUEUE_REQUESTOR',
        queueOptions: {
            durable: true,
        }
    }
}