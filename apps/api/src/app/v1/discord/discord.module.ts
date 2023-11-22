import { DiscordModule as NestDiscordModule } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SettingsModule } from '../../common/settings/settings.module';
import { SettingsService } from '../../common/settings/settings.service';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';

@Module({
  controllers: [DiscordController],
  imports: [
    SettingsModule,
    HttpModule,
    NestDiscordModule.forRootAsync({
      inject: [SettingsService],
      useFactory: async (settings: SettingsService) => ({
        token: await settings.getFieldValue('discord', 'bot-token'),
        discordClientOptions: {
          intents: [],
        },
      }),
    }),
  ],
  providers: [DiscordService],
  exports: [DiscordService],
})
export class DiscordModule {}
