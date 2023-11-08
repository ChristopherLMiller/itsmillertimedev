import { DiscordModule as NestDiscordModule } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SettingsModule } from '../../common/settings/settings.module';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';

@Module({
  controllers: [DiscordController],
  imports: [SettingsModule, HttpModule, NestDiscordModule.forFeature()],
  providers: [DiscordService],
  exports: [DiscordService],
})
export class DiscordModule {}
