import { IsString } from "class-validator";

export class AppendByeDto {
    @IsString()
    public message: string;

    @IsString()
    public readonly token: string;
}