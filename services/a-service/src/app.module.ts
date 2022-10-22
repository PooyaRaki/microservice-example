import { Module } from '@nestjs/common';
import { MessageModule } from '@components/message/v1';

@Module({
  imports: [MessageModule],
})
export class AppModule {}
