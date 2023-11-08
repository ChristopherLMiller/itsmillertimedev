import { DiscordModule } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { InjectDynamicProviders } from 'nestjs-dynamic-providers';
import { DiscordModule as ApiDiscordModule } from '../../v1/discord/discord.module';
import { MapsModule } from '../../v1/maps/maps.module';
import { WeatherModule } from '../../v1/weather/weather.module';

@InjectDynamicProviders('**/*.command.ts')
@Module({
  controllers: [],
  imports: [
    ApiDiscordModule,
    DiscordModule.forFeature(),
    HttpModule,
    WeatherModule,
    MapsModule,
  ],
  providers: [],
  exports: [],
})
export class DiscordBot {}
