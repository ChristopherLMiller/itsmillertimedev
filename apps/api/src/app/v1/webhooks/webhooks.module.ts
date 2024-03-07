import { DiscordModule } from "@discord-nestjs/core";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AuthModule } from "../../common/auth/auth.module";
import { ClockifyModule } from "../clockify/clockify.module";
import { DiscordService } from "../discord/discord.service";
import { ImageModule } from "../image/image.module";
import { WebhooksController } from "./webhooks.controller";

@Module({
  controllers: [WebhooksController],
  imports: [HttpModule, ImageModule, DiscordModule, ClockifyModule, AuthModule],
  providers: [DiscordService],
  exports: [],
})
export class WebhooksModule {}
