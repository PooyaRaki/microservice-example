import { IsString } from "class-validator";

export class AppendNameDto {
    @IsString()
    public message: string;

    @IsString()
    public readonly token: string;
}