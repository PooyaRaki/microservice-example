export interface IMicroserviceConfig {
    url: string;
    queue: string;
}

export interface IMicroserviceResponse<T> {
    data: T;
    pattern: string;
}

export interface IMicroservicePayload<T> {
    data: T;
    pattern: string;
}