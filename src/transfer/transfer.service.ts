import { Injectable } from '@nestjs/common';
import { Transfer } from './transfer.interface';

@Injectable()
export class TransferService {
  private readonly transfer: Transfer = {
    blockNumber: '6433335',
    contractAddress: null,
    from: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
    to: '',
    status: 'success',
  };

  sendTransfer(to: string): Transfer {
    this.transfer.to = to;
    return this.transfer;
  }
}
