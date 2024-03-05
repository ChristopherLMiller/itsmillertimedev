import {
  DB,
  MinecraftRule,
  MinecraftRuleCategory,
} from "@itsmillertimedev/data";
import { Injectable } from "@nestjs/common";
import { Kysely, Selectable } from "kysely";
import { InjectKysely } from "nestjs-kysely";

@Injectable()
export class MinecraftService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  findRules(): Promise<Selectable<MinecraftRule>[]> {
    return this.db.selectFrom("MinecraftRule").selectAll().execute();
  }

  findRule(ruleId: number): Promise<Selectable<MinecraftRule>> {
    return this.db
      .selectFrom("MinecraftRule")
      .where("MinecraftRule.id", "=", ruleId)
      .selectAll()
      .executeTakeFirst();
  }

  findRulesCategories(): Promise<Selectable<MinecraftRuleCategory>[]> {
    return this.db.selectFrom("MinecraftRuleCategory").selectAll().execute();
  }
}
