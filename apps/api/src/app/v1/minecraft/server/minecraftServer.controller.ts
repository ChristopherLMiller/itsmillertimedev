import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MinecraftRule, MinecraftRuleCategory } from '@prisma/client';
import { PermissionsPublic } from 'apps/api/src/common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../../common/guards/supabaseAuth.guard';
import { DataResponse } from '../../../../lib/response';
import { MinecraftService } from '../minecraft.service';

@Controller({ version: '1', path: 'minecraft/server' })
@ApiTags('Minecraft Server')
@UseGuards(supabaseAuthGuard)
export class MinecraftServerController {
  constructor(private minecraft: MinecraftService) {}

  @Get('rules')
  @PermissionsPublic()
  async getRules(): DataResponse<MinecraftRule[]> {
    const data = await this.minecraft
      .findRules()
      .then((rules) => rules.map((rule) => rule));
    return { data, meta: { totalRecords: data.length } };
  }

  @Get('rules/:id')
  @PermissionsPublic()
  async getRule(@Param('id') ruleId): DataResponse<MinecraftRule> {
    const data = await this.minecraft
      .findRule(parseInt(ruleId))
      .then((rule) => {
        if (rule === null) {
          throw new NotFoundException('Rule Not Found');
        }
        return rule;
      });
    return { data };
  }

  @Get('rules-categories')
  @PermissionsPublic()
  async getRulesCategories(): DataResponse<MinecraftRuleCategory[]> {
    const data = await this.minecraft.findRulesCategories();
    return { data, meta: { totalRecords: data.length } };
  }
}
