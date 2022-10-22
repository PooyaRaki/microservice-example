import { MicroserviceOptions, Transport } from "@nestjs/microservices";

export const AppServiceConfig: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
        urls: process.env.APP_SERVICE_URL?.split(','),
        queue: process.env.APP_SERVICE_QUEUE || 'QUEUE_A',
        queueOptions: {
            durable: true,
        }
    }
}