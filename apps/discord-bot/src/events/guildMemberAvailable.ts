import { Events } from 'discord.js';
import { ArgsOf, Discord, On } from 'discordx';

@Discord()
export class GuildMemberAvailable {
  @On({ event: Events.GuildMemberAvailable })
  onGuildMemberAvailable([guildMember]: ArgsOf<Events.GuildMemberAvailable>) {
    console.log(guildMember);
  }
}
