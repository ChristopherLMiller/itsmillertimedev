import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { BotGateway } from './bot.gateway';
import { PlayCommand } from './commands/play.command';
import { PlaylistCommand } from './commands/playlist.command';
import { RollCommand } from './commands/roll.command';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [BotGateway, PlayCommand, PlaylistCommand, RollCommand],
})
export class BotModule {}
