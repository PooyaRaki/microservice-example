import { AppendNameDto } from "./dtos";
import { ArrayRandom } from "@utils/helpers";
import { PeopleConfig } from "@utils/configs";
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
     * Appends a name to the message
     *
     * @param  {AppendNameDto} input Brief message object
     *
     * @returns {Promise<void>}
     */
    public async appendName(input: AppendNameDto): Promise<void> {
        const name = await this.peakRandomName();
        input.message += ` ${name}`;

        this.BrokerClient.emit('message.v1.appendName.completed', input);
    }

    /**
     * Returns a random name
     *
     * @returns {Promise<string>}
     */
    private async peakRandomName(): Promise<string> {
        return ArrayRandom(PeopleConfig.names);
    }
}