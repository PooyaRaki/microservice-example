import { Module } from '@nestjs/common';
// import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrokerModuleV1 } from '@components/broker/v1';
import { ServiceAModuleV1 } from '@components/serviceA';
import { ServiceBModuleV1 } from '@components/serviceB';
import { MessageRequestModuleV1 } from '@components/messageRequest/v1';
import { PostgresConfig } from '@utils/configs';
// import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [
    BrokerModuleV1,
    ServiceAModuleV1,
    ServiceBModuleV1,
    MessageRequestModuleV1,
    TypeOrmModule.forRoot(PostgresConfig),
    // ThrottlerModule.forRoot(ThrottlerConfig),
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard,
    // }
  ],
})
export class AppModule {}
