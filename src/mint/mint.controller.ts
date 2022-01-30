import { Controller, Post, Body } from '@nestjs/common';
import { MintService } from './mint.service';
import { Mint } from './mint.interface';
@Controller('mint')
export class MintController {
  constructor(private readonly mintService: MintService) {}

  @Post()
  async callMint(@Body() mint: Mint) {
    return this.mintService.callMint(mint.imageUrl);
  }
}
