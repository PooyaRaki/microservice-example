import { AppendByeDto } from "./dtos";
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { BrokerMicroservice } from "@utils/configs/microservice";

@Injectable()
export class MessageService {

    public constructor(
        @Inject(BrokerMicroservice.name)
        private readonly BrokerClient: ClientProxy,
    ) {
        //
    }

    /**
     * Appends a string to the end of a message
     *
     * @param  {AppendByeDto} input Brief message request
     *
     * @returns {Promise<void>}
     */
    public async appendBye(input: AppendByeDto): Promise<void> {
        const suffix = await this.MessageSuffix();
        input.message += ` ${suffix}`;

        this.BrokerClient.emit('message.v1.appendBye.completed', input);
    }

    /**
     * Adds a string to the end of a message
     *
     * @returns {Promise<string>}
     */
    private async MessageSuffix(): Promise<string> {
        return 'Bye';
    }
}