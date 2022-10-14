import { TransformPipe } from '@discord-nestjs/common';
import {
  DiscordTransformedCommand,
  Param,
  Payload,
  SubCommand,
  TransformedCommandExecutionContext,
  UsePipes,
} from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { DiscordService } from '../../../discord.service';

export class ZoneDto {
  @Param({
    description: 'City, State where you want to get weather',
    required: true,
  })
  location: string;
}

@Injectable()
@UsePipes(TransformPipe)
@SubCommand({ name: 'location', description: 'City to watch' })
export class LocationSubCommand implements DiscordTransformedCommand<ZoneDto> {
  constructor(private discord: DiscordService) {}

  async handler(
    @Payload() dto: ZoneDto,
    { interaction }: TransformedCommandExecutionContext
  ): Promise<string> {
    const data = await this.discord.updateUserMeta(
      interaction.user.id,
      'city',
      dto.location
    );

    if (data) {
      return 'Updated location';
    } else {
      return 'Unable to set your location';
    }
  }
}
