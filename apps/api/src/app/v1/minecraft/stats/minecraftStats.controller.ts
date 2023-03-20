import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicAuthGuard } from '../../../../common/guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../../common/interceptors/responseTransform.interceptor';
import { MinecraftService } from '../minecraft.service';

@Controller({ version: '1', path: 'minecraft/stats' })
@ApiTags('Minecraft Stats')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor)
export class MinecraftStatsController {
  constructor(private minecraft: MinecraftService) {}

  @Get('player/:id')
  async getStats(@Query('id') id): Promise<any> {
    return { data: { stats: [] }, meta: { playerId: id } };
  }
}
