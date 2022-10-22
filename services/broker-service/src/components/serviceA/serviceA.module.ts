import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";
import { ServiceAConfig } from "@utils/configs/microservice";
import { ServiceA } from "./serviceA.service";

@Module({
    imports: [
        ClientsModule.register([
            ServiceAConfig,
        ]),
    ],
    providers: [
        ServiceA,
    ],
    exports: [
        ServiceA,
    ]
})
export class ServiceAModuleV1 {
    //
}