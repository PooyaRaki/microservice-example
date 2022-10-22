import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { RequestorMicroservice } from "@utils/configs/microservice";
import { AppendByeDto } from "@components/broker/v1/dtos";

@Injectable()
export class RequestorService {

    public constructor(
        @Inject(RequestorMicroservice.name)
        private readonly RequestorClient: ClientProxy,
    ) {
        //
    }
    
    /**
     * Delivers response to the requestor service
     *
     * @param  {AppendByeDto} input Request message object
     * 
     * @returns {Promise<void>}
     */
    public async deliverResponse(input: AppendByeDto): Promise<void> {
        this.RequestorClient.emit('response.v1.delivered', input);
    }
}