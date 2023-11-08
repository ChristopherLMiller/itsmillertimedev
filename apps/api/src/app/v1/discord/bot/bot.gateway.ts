import { InjectDiscordClient, On, Once } from '@discord-nestjs/core';
import { Injectable, Logger } from '@nestjs/common';
import { Client, Events, GuildMember, Message } from 'discord.js';

@Injectable()
export class BotGateway {
  private readonly _logger = new Logger(BotGateway.name);

  constructor(@InjectDiscordClient() private readonly client: Client) {}

  @Once('ready')
  async onReady() {
    this._logger.log(`Bot ${this.client.user.tag} was started!`);
    this._logger.log(this.client);
  }

  @On(Events.GuildMemberAdd)
  async guildMemberAdd(member: GuildMember) {
    this._logger.log(
      `New member joined the server, welcome ${member.displayName}`,
    );
  }

  @On(Events.GuildMemberAvailable)
  async guildMemberAvailable(member: GuildMember) {
    this._logger.log(`${member.displayName} is now available`);
  }

  @On(Events.MessageCreate)
  async onMessageCreate(message: Message) {
    this._logger.log(message.content);
  }

  @On(Events.Debug)
  async onDebug(message) {
    this._logger.log(message);
  }
}
