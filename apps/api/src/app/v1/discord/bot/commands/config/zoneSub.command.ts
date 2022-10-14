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
import { Transform } from 'class-transformer';
import { DiscordService } from '../../../discord.service';

export class ZoneDto {
  @Transform(({ value }) => value.toUpperCase())
  @Param({
    description: 'NWS Weather Zone Identifier (Example: FLC035)',
    required: true,
  })
  zone: string;
}

@Injectable()
@UsePipes(TransformPipe)
@SubCommand({ name: 'alert', description: 'NWS Weather Zone' })
export class ZoneSubCommand implements DiscordTransformedCommand<ZoneDto> {
  constructor(private discord: DiscordService) {}

  async handler(
    @Payload() dto: ZoneDto,
    { interaction }: TransformedCommandExecutionContext
  ): Promise<void> {
    const data = await this.discord.updateUserMeta(
      interaction.user.id,
      'zone',
      dto.zone
    );

    if (data) {
      interaction.reply({
        content: 'Updated weather alert zone',
        ephemeral: true,
      });
    } else {
      interaction.reply({
        content: 'Unable to set your weather alert zone',
        ephemeral: true,
      });
    }
  }
}
