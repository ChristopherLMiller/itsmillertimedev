import { DiscordModule } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClockifyModule } from '../clockify/clockify.module';
import { DiscordService } from '../discord/discord.service';
import { ImageModule } from '../image/image.module';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';

@Module({
  controllers: [WebhooksController],
  imports: [HttpModule, ImageModule, DiscordModule, ClockifyModule],
  providers: [WebhooksService, DiscordService],
  exports: [WebhooksService],
})
export class WebhooksModule {}
