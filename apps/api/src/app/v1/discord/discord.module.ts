import { DiscordModule as DiscordBot } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GatewayIntentBits } from 'discord.js';
import { PrismaService } from '../../../prisma/prisma.service';
import { BotModule } from './bot/bot.module';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';

@Module({
  controllers: [DiscordController],
  imports: [
    DiscordBot.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        token: configService.get('DISCORD_BOT_TOKEN'),
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
    BotModule,
    HttpModule,
  ],
  providers: [DiscordService, PrismaService],
})
export class DiscordModule {}
