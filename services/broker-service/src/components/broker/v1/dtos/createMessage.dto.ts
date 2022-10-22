import { IsString } from "class-validator";

export class ProcessMessageDto {
    @IsString()
    public readonly message: string;
}