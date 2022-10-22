import { ProcessMessageDto } from "./dtos";
import { Injectable } from "@nestjs/common";
import { ServiceA } from "@components/serviceA/v1";
import { AppendByeDto } from "./dtos/appendBye.dto";
import { IProcessMessageResult } from "./interfaces";
import { AppendNameDto } from "./dtos/appendName.dto";
import { ServiceBService } from "@components/serviceB/v1";
import { MessageRequestService } from "@components/messageRequest/v1";
import { RequestorService } from "@components/requestor/v1";

@Injectable()
export class BrokerService {
    public constructor(
        private readonly ServiceA: ServiceA,
        private readonly ServiceB: ServiceBService,
        private readonly RequestorService: RequestorService,
        private readonly RequestService: MessageRequestService,
    ) {
        //
    }

    /**
     * Processes a raw message
     *
     * @param  {ProcessMessageDto} input Message input data
     *
     * @returns {Promise<Request>} Request object
     */
    public async processMessage(
        input: ProcessMessageDto,
    ): Promise<IProcessMessageResult> {
        const messageRequest = await this.RequestService.create(input);

        await this.ServiceA.emitAppendName(messageRequest);

        return messageRequest;
    }

    /**
     * Catches appendNameCompleted event
     *
     * @param  {AppendNameDto} input Brief message request
     *
     * @returns {Promise<void>}
     */
    public async appendNameCompleted(input: AppendNameDto): Promise<void> {
        await this.ServiceB.emitAppendBye(input);
    }

    /**
     * Delivers message to requestor service
     *
     * @param  {AppendByeDto} input Brief message request
     */
    public async deliverMessageToRequester(input: AppendByeDto): Promise<void> {
        await this.RequestorService.deliverResponse(input);
    }

    /**
     * Updates messageRequest appendByeCompleted event
     *
     * @param  {AppendByeDto} input MessageRequest
     *
     * @returns {Promise<void>}
     */
    public async updateMessageRequest(input: AppendByeDto): Promise<void> {
        await this.RequestService.update({
            token: input.token,
            message: input.message,
        });
    }
}