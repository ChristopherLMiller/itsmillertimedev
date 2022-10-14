import { DiscordModule } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { NWSWeatherModule } from '../../weather/nws/nws.module';
import { DiscordService } from '../discord.service';
import { BotGateway } from './bot.gateway';
import { WeatherAlertsCommand } from './commands/alerts';
import { LocationSubCommand } from './commands/config/locationSub.command';
import { RegistrationCommand } from './commands/config/registration.command';
import { ZoneSubCommand } from './commands/config/zoneSub.command';
import { RollCommand } from './commands/roll.command';

@Module({
  imports: [DiscordModule.forFeature(), HttpModule, NWSWeatherModule],
  providers: [
    BotGateway,
    RollCommand,
    WeatherAlertsCommand,
    PrismaService,
    DiscordService,
    RegistrationCommand,
    ZoneSubCommand,
    LocationSubCommand,
  ],
})
export class BotModule {}
