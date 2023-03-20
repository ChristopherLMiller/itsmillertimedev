import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../common/prisma/prisma.service';

@Injectable()
export class MinecraftService {
  constructor(private prisma: PrismaService) {}

  findRules(): any {
    return this.prisma.minecraftRule.findMany();
  }

  findRule(ruleId: number): any {
    console.info(ruleId);
    return this.prisma.minecraftRule.findFirst({ where: { id: ruleId } });
  }

  findRulesCategories(): any {
    return this.prisma.minecraftRuleCategory.findMany();
  }
}
