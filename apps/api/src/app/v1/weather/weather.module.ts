import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { SettingsModule } from '../../settings/settings.module';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  controllers: [WeatherController],
  imports: [
    CacheModule.register(),
    HttpModule.register({
      baseURL: 'https://api.openweathermap.org/data/3.0/',
    }),
    SettingsModule,
  ],
  providers: [WeatherService],
  exports: [WeatherService],
})
export class WeatherModule {}
