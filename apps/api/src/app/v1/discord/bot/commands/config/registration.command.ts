import { Command, UseGroup } from '@discord-nestjs/core';
import { LocationSubCommand } from './locationSub.command';
import { ZoneSubCommand } from './zoneSub.command';

@Command({
  name: 'config',
  description: 'User Registration',
  include: [
    UseGroup(
      {
        name: 'weather',
        description: 'Weather related settings',
      },
      ZoneSubCommand,
      LocationSubCommand
    ),
  ],
})
export class RegistrationCommand {}
