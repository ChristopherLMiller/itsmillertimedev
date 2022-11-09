import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WeatherController } from './weather.controller.ts';
import { WeatherService } from './weather.service';

@Module({
  controllers: [WeatherController],
  imports: [
    CacheModule.register(),
    HttpModule.register({
      baseURL: 'https://api.openweathermap.org/data/3.0/',
    }),
  ],
  providers: [WeatherService, ConfigService],
  exports: [WeatherService],
})
export class WeatherModule {}
