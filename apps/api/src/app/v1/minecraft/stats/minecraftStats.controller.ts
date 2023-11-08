import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionsPublic } from '../../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../../common/guards/supabaseAuth.guard';
import { DataResponse } from '../../../../lib/response';
import { MinecraftService } from '../minecraft.service';

@Controller({ version: '1', path: 'minecraft/stats' })
@ApiTags('Minecraft Stats')
@UseGuards(supabaseAuthGuard)
export class MinecraftStatsController {
  constructor(private minecraft: MinecraftService) {}

  @Get('player/:id')
  @PermissionsPublic()
  async getStats(@Query('id') id): DataResponse<any> {
    return { data: { stats: [] }, meta: { playerId: id } };
  }
}
