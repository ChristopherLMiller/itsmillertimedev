import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ClockifyService } from '../clockify/clockify.service';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';

@Module({
  controllers: [WebhooksController],
  imports: [HttpModule],
  providers: [WebhooksService, ClockifyService, PrismaService],
})
export class WebhooksModule {}
