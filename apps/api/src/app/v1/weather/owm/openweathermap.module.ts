import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OpenWeatherMapController } from './openweathermap.controller';
import { OpenWeatherMapService } from './openweathermap.service';

@Module({
  controllers: [OpenWeatherMapController],
  imports: [
    CacheModule.register(),
    HttpModule.register({
      baseURL: 'https://api.openweathermap.org/data/3.0/',
    }),
  ],
  providers: [OpenWeatherMapService, ConfigService],
})
export class WeatherModule {}
