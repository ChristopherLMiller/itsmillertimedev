import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { NWSWeatherController } from './nws.controller';
import { NWSWeatherService } from './nws.service';

@Module({
  controllers: [NWSWeatherController],
  imports: [
    CacheModule.register(),
    HttpModule.register({
      baseURL: 'https://api.weather.gov',
    }),
  ],
  providers: [NWSWeatherService],
})
export class NWSWeatherModule {}
