import { HttpService } from "@nestjs/axios";
import { BadRequestException, Injectable, Logger } from "@nestjs/common";

import { InjectDiscordClient } from "@discord-nestjs/core";
import { DB, DiscordUserSetting } from "@itsmillertimedev/data";
import { Client, Collection, User } from "discord.js";
import { Insertable, Kysely, Selectable, Updateable } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { dataFetcher } from "../../../global/handlers/dataFetcher";
import { SettingsService } from "../../common/settings/settings.service";

@Injectable()
export class DiscordService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private httpService: HttpService,
    private settings: SettingsService,
    @InjectDiscordClient() private readonly client: Client,
  ) {}

  // Local variables
  private readonly _logger = new Logger(DiscordService.name);

  async sendDiscordMessage(message: string, channel: string): Promise<void> {
    const discordChannel = (await this.settings.getFieldValue(
      "discord",
      channel,
    )) as string;

    // There is no response from discord, so nothing to return, just run it
    dataFetcher(
      this.httpService.post(discordChannel, {
        username: "ItsMillerTime",
        avatar_url:
          "https://images.itsmillertime.dev/v1664470345/clm-new/assets/discord-avatar.png",
        content: message,
        channel_id: "",
      }),
    );
    this._logger.log(`Message sent to discord channel ${channel}`);
  }

  async getDiscordClientUsers(): Promise<Collection<string, User>> {
    const users = await this.client.users.cache;

    return users;
  }

  async getDiscordClientUser(userId: string): Promise<User> {
    try {
      return await this.client.users.fetch(userId, { force: true });
    } catch (error) {
      this._logger.log(error);
      throw new BadRequestException(
        "User was not found in the Discord server cache",
      );
    }
  }

  async getUsersMeta(
    userId?: DiscordUserSetting["userId"],
  ): Promise<Selectable<DiscordUserSetting>[]> {
    return this.db
      .selectFrom("DiscordUserSetting")
      .where("userId", "=", userId)
      .selectAll()
      .execute();
  }

  async createUserMeta(
    userId: string,
    meta?: DiscordUserSetting["meta"],
  ): Promise<Insertable<DiscordUserSetting>> {
    return this.db
      .insertInto("DiscordUserSetting")
      .values({ userId, meta })
      .returningAll()
      .onConflict((oc) => oc.column("userId").doNothing())
      .execute();
  }

  async updateUserMeta(
    userId: string,
    key: string,
    value: string,
  ): Promise<Updateable<DiscordUserSetting>> {
    // first get the user meta
    const userData = await this.getUsersMeta(userId)[0];
    const meta = userData ? userData.meta : {};

    // update the field
    meta[key] = value;

    // update the data to the database and then return it
    return this.db
      .updateTable("DiscordUserSetting")
      .where("userId", "=", userId)
      .set(meta)
      .returningAll()
      .executeTakeFirst();
  }
}
