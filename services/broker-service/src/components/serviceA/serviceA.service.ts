import { Observable } from "rxjs";
import { IAppendName } from "./interfaces";
import { ClientProxy } from "@nestjs/microservices";
import { Inject, Injectable } from "@nestjs/common";
import { ServiceAConfig } from "@utils/configs/microservice";
import { MessageRequest } from "@components/messageRequest/v1/entities";

@Injectable()
export class ServiceA {

    public constructor(
        @Inject(ServiceAConfig.name)
        private readonly client: ClientProxy,
    ) {
        //
    }

    /**
     * Sends a message to Service A to append appropriate string to the end of the message
     *
     * @param  {MessageRequest} input Message request input data
     *
     * @returns {Promise<void>}
     */
    public async emitAppendName(input: MessageRequest): Promise<void> {
        this.client.emit<Observable<any>, IAppendName>('message.v1.appendName', {
            token: input.token,
            message: input.message,
        });
    }
}