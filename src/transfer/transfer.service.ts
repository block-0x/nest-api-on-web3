import { Injectable } from '@nestjs/common';
import { Transfer } from './transfer.interface';

@Injectable()
export class TransferService {
  private readonly transfer: Transfer[] = [
    {
      blockNumber: '6460655',
      txHash:
        '0x335929a4e59b0860aerg44g284dace74c00f7eadaadce7a18d6deba6c544esgg',
      contractAddress: '0x6a45df8080c8cef5ae2d941356792fa925fdefea',
    },
    {
      blockNumber: '6220655',
      txHash:
        '0x535929a4e59b0860ec04c620c1284dace74c00f7eadwwdce7a18dwweba6c544e',
      contractAddress: '0x6a55df8080c8cef5ae2d941356792fa925fdefea',
    },
    {
      blockNumber: '6433335',
      txHash:
        '0x23fe29a4e59b0860ec04c620c1284dace74c00f7eadaadce7a18d6deba6c544e',
      contractAddress: null,
    },
  ];

  listTransfer(): Transfer[] {
    return this.transfer;
  }

  getTransfer(id: string): Transfer {
    return this.transfer.find((value) => value.blockNumber === id);
  }
}
