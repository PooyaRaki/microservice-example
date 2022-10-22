import { Test } from "@nestjs/testing";
import { MessageRequest } from "./entities";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostgresTestConfig } from "@utils/configs";
import { MessageRequestService } from "./messageRequest.service";

export const MessageRequestModuleV1Test = async() => Test.createTestingModule({
    imports: [
        TypeOrmModule.forRoot(PostgresTestConfig),
        TypeOrmModule.forFeature([
            MessageRequest,
        ]),
    ],
    providers: [
        MessageRequestService,
    ],
}).compile();