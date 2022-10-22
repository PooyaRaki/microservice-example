import { IApi } from "@utils/interfaces";
import { ProcessMessageDto } from "./dtos";
import { Controller } from "@nestjs/common";
import { BrokerService } from "./broker.service";
import { AppendByeDto } from "./dtos/appendBye.dto";
import { IProcessMessageResult } from "./interfaces";
import { AppendNameDto } from "./dtos/appendName.dto";
import { EventPattern, Payload } from "@nestjs/microservices";

@Controller()
export class BrokerController {
    public constructor(
        private readonly BrokerService: BrokerService,
    ) {
        //
    }

    @EventPattern('message.v1.process')
    public async processMessage(
        @Payload() payload: ProcessMessageDto,
    ): Promise<IApi<IProcessMessageResult>> {
        return {
            data: await this.BrokerService.processMessage(payload),
        };
    }

    @EventPattern('message.v1.appendName.completed')
    public async appendNameCompleted(
        @Payload() payload: AppendNameDto,
    ): Promise<void> {
        return await this.BrokerService.appendNameCompleted(payload);
    }

    @EventPattern('message.v1.appendBye.completed')
    public async appendByeCompletedUpdate(
        @Payload() payload: AppendByeDto,
    ): Promise<void> {
        return await this.BrokerService.updateMessageRequest(payload);
    }

    @EventPattern('message.v1.appendBye.completed')
    public async appendByeCompletedDeliver(
        @Payload() payload: AppendByeDto,
    ): Promise<void> {
        return await this.BrokerService.deliverMessageToRequester(payload);
    }
}