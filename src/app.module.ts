import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NftModule } from './nft/nft.module';
import { TransferModule } from './transfer/transfer.module';

@Module({
  imports: [NftModule, TransferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
