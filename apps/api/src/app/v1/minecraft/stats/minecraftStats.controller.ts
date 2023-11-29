import { DataResponse } from '@itsmillertimedev/data';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionsPublic } from '../../../../common/decorators/auth.decorator';
import { MinecraftService } from '../minecraft.service';

@Controller({ version: '1', path: 'minecraft/stats' })
@ApiTags('Minecraft Stats')
export class MinecraftStatsController {
  constructor(private minecraft: MinecraftService) {}

  @Get('player/:id')
  @PermissionsPublic()
  async getStats(@Query('id') id): DataResponse<any> {
    return { data: { stats: [] }, meta: { playerId: id } };
  }
}
