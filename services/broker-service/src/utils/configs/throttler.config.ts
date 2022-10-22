import { ThrottlerModuleOptions } from "@nestjs/throttler";

export const ThrottlerConfig: ThrottlerModuleOptions = {
    ttl: ~~(process.env.THROTTLER_TTL || 60),
    limit: ~~(process.env.THROTTLER_LIMIT || 10),
}