import { Controller, Post, Param } from '@nestjs/common';
import { NftService } from './nft.service';
import { Nft } from './nft.interface';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Post()
  listUsers(): Nft[] {
    return this.nftService.listNft();
  }

  @Post(':id')
  getTest(@Param('id') id: string): Nft {
    return this.nftService.getNft(id);
  }
}
