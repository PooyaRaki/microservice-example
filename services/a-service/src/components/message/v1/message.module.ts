import { Module } from "@nestjs/common";
import { MessageService } from "./message.service";
import { ClientsModule } from "@nestjs/microservices";
import { MessageController } from "./message.controller";
import { BrokerMicroservice } from "@utils/configs/microservice";

@Module({
    imports: [
        ClientsModule.register([
            BrokerMicroservice,
        ]),
    ],
    providers: [
        MessageService,
    ],
    controllers: [
        MessageController,
    ]
})
export class MessageModule {
    //
}