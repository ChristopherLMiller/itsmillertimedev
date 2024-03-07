import {
  DataResponse,
  MinecraftRule,
  MinecraftRuleCategory,
} from "@itsmillertimedev/data";
import { CacheInterceptor } from "@nestjs/cache-manager";
import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseInterceptors,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Selectable } from "kysely";
import { MinecraftService } from "../minecraft.service";

@Controller({ version: "1", path: "minecraft/server" })
@ApiTags("Minecraft Server")
@UseInterceptors(CacheInterceptor)
export class MinecraftServerController {
  constructor(private minecraft: MinecraftService) {}

  @Get("rules")
  async getRules(): DataResponse<Selectable<MinecraftRule>[]> {
    const data = await this.minecraft
      .findRules()
      .then((rules) => rules.map((rule) => rule));
    return { data, meta: { totalRecords: data.length } };
  }

  @Get("rules/:id")
  async getRule(@Param("id") ruleId): DataResponse<Selectable<MinecraftRule>> {
    const data = await this.minecraft
      .findRule(parseInt(ruleId))
      .then((rule) => {
        if (rule === null) {
          throw new NotFoundException("Rule Not Found");
        }
        return rule;
      });
    return { data };
  }

  @Get("rules-categories")
  async getRulesCategories(): DataResponse<
    Selectable<MinecraftRuleCategory>[]
  > {
    const data = await this.minecraft.findRulesCategories();
    return { data, meta: { totalRecords: data.length } };
  }
}
