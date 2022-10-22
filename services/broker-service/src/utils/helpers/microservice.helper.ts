import { MicroserviceConfig } from "@utils/configs"
import { InternalServerErrorException } from "@nestjs/common";
import { catchError, firstValueFrom, Observable, of, timeout, TimeoutError } from "rxjs"

export const MicroserviceResponse = async <T>(source: Observable<T>, timeoutLength?: number): Promise<T> => {
        return await firstValueFrom(
            source
                .pipe(timeout(timeoutLength ?? MicroserviceConfig.timeout))
                .pipe(catchError(val => of(HandleMicroserviceError(val)))),
        );
}

export const HandleMicroserviceError = async (error: any): Promise<never> => {
    if (error instanceof TimeoutError) {
        throw new InternalServerErrorException('TIMEOUT_ERROR'); // @todo Read from message constants
    }

    throw error;
}