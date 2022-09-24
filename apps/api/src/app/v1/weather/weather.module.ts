import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  controllers: [WeatherController],
  imports: [
    CacheModule.register(),
    HttpModule.register({
      baseURL: 'https://api.weather.gov',
    }),
  ],
  providers: [WeatherService],
})
export class WeatherModule {}
