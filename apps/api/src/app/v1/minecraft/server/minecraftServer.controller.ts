import { Response } from '@itsmillertimedev/data';
import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MinecraftRule, MinecraftRuleCategory } from '@prisma/client';
import { BasicAuthGuard } from '../../../../common/guards/basicAuth.guard';
import { MinecraftService } from '../minecraft.service';

@Controller({ version: '1', path: 'minecraft/server' })
@ApiTags('Minecraft Server')
@UseGuards(BasicAuthGuard)
export class MinecraftServerController {
  constructor(private minecraft: MinecraftService) {}

  @Get('rules')
  async getRules(): Response<MinecraftRule[]> {
    const data = await this.minecraft
      .findRules()
      .then((rules) => rules.map((rule) => rule));
    return { data, meta: { totalRecords: data.length } };
  }

  @Get('rules/:id')
  async getRule(@Param('id') ruleId): Response<MinecraftRule> {
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
  async getRulesCategories(): Response<MinecraftRuleCategory[]> {
    const data = await this.minecraft.findRulesCategories();
    return { data, meta: { totalRecords: data.length } };
  }
}
