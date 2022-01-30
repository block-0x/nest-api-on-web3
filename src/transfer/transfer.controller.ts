import { Controller, Post, Body } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { Transfer } from './transfer.interface';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  async sendTransfer(@Body() transfer: Transfer) {
    return await this.transferService.sendTransfer(transfer.to);
  }
}
