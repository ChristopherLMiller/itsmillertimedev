import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ClockifyService } from '../clockify/clockify.service';
import { DiscordService } from '../discord/discord.service';
import { ImageModule } from '../image/image.module';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';

@Module({
  controllers: [WebhooksController],
  imports: [HttpModule, ImageModule],
  providers: [WebhooksService, ClockifyService, PrismaService, DiscordService],
})
export class WebhooksModule {}
