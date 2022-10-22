import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageRequest } from "./entities";
import { MessageRequestService } from "./messageRequest.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            MessageRequest,
        ]),
    ],
    providers: [
        MessageRequestService,
    ],
    controllers: [],
    exports: [
        MessageRequestService,
    ]
})
export class MessageRequestModuleV1 {
    //
}