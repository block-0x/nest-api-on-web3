import { Controller, Param, Post } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { Transfer } from './transfer.interface';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  listUsers(): Transfer[] {
    return this.transferService.listTransfer();
  }

  @Post(':id')
  getTest(@Param('id') id: string): Transfer {
    return this.transferService.getTransfer(id);
  }
}
