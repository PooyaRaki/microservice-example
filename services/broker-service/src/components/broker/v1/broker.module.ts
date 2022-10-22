import { Module } from "@nestjs/common";
import { BrokerService } from "./broker.service";
import { BrokerController } from "./broker.controller";
import { MessageRequestModuleV1 } from "@components/messageRequest/v1";
import { ServiceAModuleV1 } from "@components/serviceA";
import { ServiceBModuleV1 } from "@components/serviceB";
import { RequestorV1Module } from "@components/requestor/v1";

@Module({
    imports: [
        ServiceAModuleV1,
        ServiceBModuleV1,
        RequestorV1Module,
        MessageRequestModuleV1,
    ],
    providers: [
        BrokerService,
    ],
    controllers: [
        BrokerController,
    ],
})
export class BrokerModuleV1 {
    //
}