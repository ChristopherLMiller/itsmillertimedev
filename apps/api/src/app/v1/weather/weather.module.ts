import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  controllers: [WeatherController],
  imports: [
    CacheModule.register(),
    HttpModule.register({
      baseURL: 'https://api.openweathermap.org/data/3.0/',
    }),
  ],
  providers: [WeatherService],
  exports: [WeatherService],
})
export class WeatherModule {}
