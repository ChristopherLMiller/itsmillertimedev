import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { BotGateway } from './bot.gateway';
import { DiscordConfigService } from './discord-config.service';

@Module({
  controllers: [],
  imports: [DiscordModule.forRootAsync({ useClass: DiscordConfigService })],
  providers: [BotGateway],
  exports: [],
})
export class DiscordBotModule {}
