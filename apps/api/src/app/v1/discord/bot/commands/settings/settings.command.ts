import { Command, UseGroup } from '@discord-nestjs/core';
import { LocationSubCommand } from './locationSub.command';

@Command({
  name: 'settings',
  description: 'User Settings',
  include: [
    UseGroup(
      { name: 'weather', description: 'Weather settings' },
      LocationSubCommand
    ),
  ],
})
export class SettingsCommand {}
