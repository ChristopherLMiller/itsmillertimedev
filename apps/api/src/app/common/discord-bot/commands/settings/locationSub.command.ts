import { SlashCommandPipe } from '@discord-nestjs/common';
import {
  EventParams,
  Handler,
  IA,
  Param,
  SubCommand,
} from '@discord-nestjs/core';
import { ClientEvents, InteractionReplyOptions } from 'discord.js';
import { DiscordService } from '../../../../v1/discord/discord.service';
import { MapsService } from '../../../../v1/maps/maps.service';

export class ZoneDto {
  @Param({
    description: 'City, State where you want to get weather',
    required: true,
  })
  location: string;
}

@SubCommand({ name: 'location', description: 'City to watch' })
export class LocationSubCommand {
  constructor(
    private discord: DiscordService,
    private maps: MapsService,
  ) {}

  @Handler()
  async onLocationSubCommand(
    @IA(SlashCommandPipe) dto: ZoneDto,
    @EventParams() interaction: ClientEvents['interactionCreate'],
  ): Promise<InteractionReplyOptions> {
    const event = interaction[0];

    const gpsData = await this.maps.getGPSCoordinateFromLocation(dto.location);

    // update the user meta with the location returned
    const data = await this.discord.updateUserMeta(
      event.user.id,
      'location',
      JSON.stringify(gpsData),
    );

    if (data) {
      return {
        content: `Updated location: ${gpsData.address}`,
        ephemeral: true,
      };
    } else {
      return {
        content: 'Unable to set your location',
        ephemeral: true,
      };
    }
  }
}
