import { IMicroserviceConfig } from "@utils/interfaces";

export const AppMicroservice: IMicroserviceConfig = {
    url: <string> process.env.REQUESTOR_SERVICE_URL,
    queue: <string> process.env.REQUESTOR_SERVICE_QUEUE,
}