import { Response } from '@itsmillertimedev/data';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicAuthGuard } from '../../../../common/guards/basicAuth.guard';
import { MinecraftService } from '../minecraft.service';

@Controller({ version: '1', path: 'minecraft/stats' })
@ApiTags('Minecraft Stats')
@UseGuards(BasicAuthGuard)
export class MinecraftStatsController {
  constructor(private minecraft: MinecraftService) {}

  @Get('player/:id')
  async getStats(@Query('id') id): Response<any> {
    return { data: { stats: [] }, meta: { playerId: id } };
  }
}
