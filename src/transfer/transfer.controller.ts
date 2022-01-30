import { Controller, Get, Param } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { Transfer } from './transfer.interface';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Get()
  listUsers(): Transfer[] {
    return this.transferService.listTransfer();
  }

  @Get(':id')
  getTest(@Param('id') id: string): Transfer {
    return this.transferService.getTransfer(id);
  }
}
