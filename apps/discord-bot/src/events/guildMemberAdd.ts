import { Events } from 'discord.js';
import { ArgsOf, Discord, On } from 'discordx';

@Discord()
export class GuildMemberAdd {
  @On({ event: Events.GuildMemberAdd })
  async onGuildMemberAdd([guildMember]: ArgsOf<Events.GuildMemberAdd>) {
    guildMember.send(`Welcome to the server ${guildMember.nickname}! :wave:`);
  }
}
