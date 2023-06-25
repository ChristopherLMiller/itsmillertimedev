import { DiscordModule as DiscordBot } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GatewayIntentBits } from 'discord.js';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { SettingsModule } from '../../settings/settings.module';
import { SettingsService } from '../../settings/settings.service';
import { BotModule } from './bot/bot.module';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';

@Module({
  controllers: [DiscordController],
  imports: [
    DiscordBot.forRootAsync({
      imports: [SettingsModule],
      inject: [SettingsService],
      useFactory: async (settings: SettingsService) => ({
        token: await settings.getField('discord', 'bot_token'),
        discordClientOptions: {
          intents: [
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildWebhooks,
            GatewayIntentBits.MessageContent,
          ],
        },
      }),
    }),
    PrismaModule,
    BotModule,
    HttpModule,
  ],
  providers: [DiscordService],
  exports: [DiscordService],
})
export class DiscordModule {}
