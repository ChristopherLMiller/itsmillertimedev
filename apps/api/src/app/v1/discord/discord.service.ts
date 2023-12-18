import { HttpService } from "@nestjs/axios";
import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { DiscordUserSetting, Prisma } from "@prisma/client";

import { InjectDiscordClient } from "@discord-nestjs/core";
import { Client, Collection, User } from "discord.js";
import { dataFetcher } from "../../../common/handlers/dataFetcher";
import { PrismaService } from "../../common/prisma/prisma.service";
import { SettingsService } from "../../common/settings/settings.service";

@Injectable()
export class DiscordService {
  constructor(
    private httpService: HttpService,
    private prisma: PrismaService,
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
  ): Promise<Array<DiscordUserSetting>> {
    return this.prisma.discordUserSetting.findMany({ where: { userId } });
  }

  async createUserMeta(
    userId: string,
    meta?: DiscordUserSetting["meta"],
  ): Promise<DiscordUserSetting> {
    try {
      const data = this.prisma.discordUserSetting.create({
        data: { userId, meta: meta || {} },
      });
      return data;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          this._logger.log(`The user ${userId} has already been created`);
          return this.prisma.discordUserSetting.findUnique({
            where: { userId: userId },
          });
        }
      }
    }
  }

  async updateUserMeta(
    userId: string,
    key: string,
    value: string,
  ): Promise<DiscordUserSetting> {
    // first get the user meta
    const userData = await this.getUsersMeta(userId)[0];
    const meta = userData ? userData.meta : {};

    // update the field
    meta[key] = value;

    // Upsert the data to the database and then return it
    return this.prisma.discordUserSetting.upsert({
      where: { userId },
      create: {
        userId,
        meta,
      },
      update: {
        userId,
        meta,
      },
    });
  }
}
