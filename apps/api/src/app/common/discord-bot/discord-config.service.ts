import {
  DiscordModuleOption,
  DiscordOptionsFactory,
} from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { GatewayIntentBits } from 'discord.js';
import { SettingsService } from '../settings/settings.service';

@Injectable()
export class DiscordConfigService implements DiscordOptionsFactory {
  constructor(private settings: SettingsService) {}

  async createDiscordOptions(): Promise<DiscordModuleOption> {
    return {
      token: await this.settings.getFieldValue('discord', 'bot-token'),
      discordClientOptions: {
        intents: [
          GatewayIntentBits.DirectMessages,
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.GuildWebhooks,
          GatewayIntentBits.GuildMembers,
          GatewayIntentBits.GuildPresences,
          GatewayIntentBits.MessageContent,
        ],
      },
    };
  }
}
