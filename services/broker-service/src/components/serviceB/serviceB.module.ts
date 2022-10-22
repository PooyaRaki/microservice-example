import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";
import { ServiceBConfig } from "@utils/configs/microservice";
import { ServiceBService } from "./serviceB.service";

@Module({
    imports: [
        ClientsModule.register([
            ServiceBConfig,
        ])
    ],
    providers: [
        ServiceBService,
    ],
    exports: [
        ServiceBService,
    ]
})
export class ServiceBModuleV1 {
    //
}