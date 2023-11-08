import { Injectable } from '@nestjs/common';
import { MinecraftRule, MinecraftRuleCategory } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class MinecraftService {
  constructor(private prisma: PrismaService) {}

  findRules(): Promise<Array<MinecraftRule>> {
    return this.prisma.minecraftRule.findMany();
  }

  findRule(ruleId: number): Promise<MinecraftRule> {
    return this.prisma.minecraftRule.findFirst({ where: { id: ruleId } });
  }

  findRulesCategories(): Promise<Array<MinecraftRuleCategory>> {
    return this.prisma.minecraftRuleCategory.findMany();
  }
}
