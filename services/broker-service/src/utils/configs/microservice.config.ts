export const MicroserviceConfig = {
    timeout: ~~(process.env.MICROSERVICE_TIMEOUT || 1000),
}