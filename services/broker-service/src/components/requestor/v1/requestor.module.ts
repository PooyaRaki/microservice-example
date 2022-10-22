import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";
import { RequestorService } from "./requestor.service";
import { RequestorMicroservice } from "@utils/configs/microservice";

@Module({
    imports: [
        ClientsModule.register([
            RequestorMicroservice,
        ]),
    ],
    providers: [
        RequestorService,
    ],
    exports: [
        RequestorService,
    ],
})
export class RequestorV1Module {
    //
}