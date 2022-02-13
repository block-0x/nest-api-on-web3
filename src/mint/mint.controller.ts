import { Controller, Get, Body } from '@nestjs/common';
import { MintService } from './mint.service';
import { Mint } from './mint.interface';

@Controller('mint')
export class MintController {
  constructor(private readonly mintService: MintService) {}

  @Get()
  async callMint(@Body() mint: Mint) {
    return this.mintService.callMint(mint.imageUrl);
  }
}
