import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  controllers: [WeatherController],
  imports: [
    HttpModule.register({
      baseURL: 'https://api.weather.gov',
      headers: {
        'User-Agent': '(api.itsmillertime.dev admin@itsmillertime.dev)',
      },
    }),
  ],
  providers: [WeatherService],
})
export class WeatherModule {}
