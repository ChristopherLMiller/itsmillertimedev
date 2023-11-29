import { Events } from 'discord.js';
import { ArgsOf, Discord, On } from 'discordx';

@Discord()
export class GuildMemberRemove {
  @On({ event: Events.GuildMemberRemove })
  onGuildMemberAdd([guildMember]: ArgsOf<Events.GuildMemberRemove>) {
    console.log(guildMember);
  }
}
