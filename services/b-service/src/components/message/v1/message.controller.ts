import { Controller } from "@nestjs/common";
import { MessageService } from "./message.service";
import { EventPattern, Payload } from "@nestjs/microservices";
import { AppendByeDto } from "./dtos";

@Controller()
export class MessageController {
    public constructor(
        private readonly MessageService: MessageService,
    ) {
        //
    }

    @EventPattern('message.v1.appendBye.started')
    public async appendBye(
        @Payload() input: AppendByeDto,
    ): Promise<void> {
        return await this.MessageService.appendBye(input);
    }
}