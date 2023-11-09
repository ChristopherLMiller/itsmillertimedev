import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  controllers: [WeatherController],
  imports: [
    HttpModule.register({
      baseURL: 'https://api.openweathermap.org/data/3.0/',
    }),
  ],
  providers: [WeatherService],
  exports: [WeatherService],
})
export class WeatherModule {}
