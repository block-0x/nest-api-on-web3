import { Injectable } from '@nestjs/common';
import { Mint } from './mint.interface';

@Injectable()

export class MintService {
  private readonly mint: Mint = {
    blockNumber: '6433335',
    txHash: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
    status: 'success',
  };

  callMint(imageUrl: string): Mint {
    return this.mint;
  }
}
