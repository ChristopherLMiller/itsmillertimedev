import { DiscordModule } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MapsModule } from '../../maps/maps.module';
import { MapsService } from '../../maps/maps.service';
import { WeatherModule } from '../../weather/weather.module';
import { DiscordService } from '../discord.service';
import { BotGateway } from './bot.gateway';
import { WeatherAlertsCommand } from './commands/alerts';
import { RollCommand } from './commands/roll.command';
import { LocationSubCommand } from './commands/settings/locationSub.command';
import { SettingsCommand } from './commands/settings/settings.command';

@Module({
  imports: [DiscordModule.forFeature(), HttpModule, WeatherModule, MapsModule],
  providers: [
    BotGateway,
    RollCommand,
    WeatherAlertsCommand,
    DiscordService,
    SettingsCommand,
    LocationSubCommand,
    MapsService,
  ],
})
export class BotModule {}
