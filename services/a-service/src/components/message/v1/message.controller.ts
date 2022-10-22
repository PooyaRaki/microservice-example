import { Controller } from "@nestjs/common";
import { MessageService } from "./message.service";
import { EventPattern, Payload } from "@nestjs/microservices";
import { AppendNameDto } from "./dtos";

@Controller()
export class MessageController {
    public constructor(
        private readonly MessageService: MessageService,
    ) {
        //
    }

    @EventPattern('message.v1.appendName')
    public async appendName(
        @Payload() input: AppendNameDto,
    ): Promise<void> {
        return await this.MessageService.appendName(input);
    }
}