export const AppConfig = {
    fetchInterval: ~~(process.env.MICROSERVICE_INTERVAL || 50),
    fetchTimeout: ~~(process.env.MICROSERVICE_TIMEOUT || 1000),
}