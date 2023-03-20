import { DiscordModule as DiscordBot } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GatewayIntentBits } from 'discord.js';
import { PrismaModule } from '../../../common/prisma/prisma.module';
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
    PrismaModule,
    BotModule,
    HttpModule,
  ],
  providers: [DiscordService],
  exports: [DiscordService],
})
export class DiscordModule {}
