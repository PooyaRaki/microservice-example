import { Observable } from "rxjs";
import { ClientProxy } from "@nestjs/microservices";
import { Inject, Injectable } from "@nestjs/common";
import { ServiceBConfig } from "@utils/configs/microservice";
import { AppendByeDto } from "@components/broker/v1/dtos/appendBye.dto";

@Injectable()
export class ServiceBService {

    public constructor(
        @Inject(ServiceBConfig.name)
        private readonly client: ClientProxy,
    ) {
        //
    }

    /**
     * Sends a message to Service B to append appropriate string to the end of the message
     *
     * @param  {AppendByeDto} input Message request input data
     *
     * @returns {Promise<void>}
     */
    public async emitAppendBye(input: AppendByeDto): Promise<void> {
        this.client.emit<Observable<any>, AppendByeDto>('message.v1.appendBye.started', input);
    }
}