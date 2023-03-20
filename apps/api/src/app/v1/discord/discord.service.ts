import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { DiscordUserSetting } from '@prisma/client';
import { catchError, firstValueFrom } from 'rxjs';
import { axiosErrorHandler } from '../../../common/handlers/axiosErrorHandler';

import { PrismaService } from '../../../common/prisma/prisma.service';
import { DiscordChannels } from './discord.types';

@Injectable()
export class DiscordService {
  constructor(
    private httpService: HttpService,
    private prisma: PrismaService
  ) {}

  async sendMessage(message: string, channel: DiscordChannels) {
    const response = this.httpService
      .post(
        // TODO Refactor this out for the process
        process.env[channel],
        JSON.stringify({
          username: 'ItsMillerTime',
          avatar_url:
            'https://images.itsmillertime.dev/v1664470345/clm-new/assets/discord-avatar.png',
          content: message,
          channel_id: '',
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(catchError(axiosErrorHandler));

    const { data } = await firstValueFrom(response);
    return data;
  }

  async getUserMeta(userId: string): Promise<DiscordUserSetting> {
    return this.prisma.discordUserSetting.findUnique({
      where: {
        userId,
      },
    });
  }

  async updateUserMeta(
    userId: string,
    key: string,
    value: string
  ): Promise<DiscordUserSetting> {
    // first get the user meta
    const userData = await this.getUserMeta(userId);
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
