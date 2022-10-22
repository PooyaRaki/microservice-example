import { IMicroserviceConfig } from "@utils/interfaces";

export const BrokerMicroservice: IMicroserviceConfig = {
    url: <string> process.env.BROKER_SERVICE_URL,
    queue: <string> process.env.BROKER_SERVICE_QUEUE,
}