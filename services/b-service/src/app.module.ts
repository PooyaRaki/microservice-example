import { MessageModule } from '@components/message/v1';
import { Module } from '@nestjs/common';

@Module({
  imports: [MessageModule],
})
export class AppModule {}
