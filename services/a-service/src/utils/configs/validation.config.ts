import { ValidationPipeOptions } from "@nestjs/common";

export const ValidationConfig: ValidationPipeOptions = {
    whitelist: true,
    forbidUnknownValues: true,
    forbidNonWhitelisted: true,
}