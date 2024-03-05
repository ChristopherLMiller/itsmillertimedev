import { ExpressionBuilder } from "kysely";
import { jsonObjectFrom } from "kysely/helpers/postgres";
import { DB } from "./generated/types";

export function withDiscord(eb: ExpressionBuilder<DB, "UserProfile">) {
  return jsonObjectFrom(
    eb
      .selectFrom("DiscordUserSetting")
      .selectAll()
      .whereRef(
        "UserProfile.discordUserSettingUserId",
        "=",
        "DiscordUserSetting.userId",
      ),
  ).as("discord");
}
