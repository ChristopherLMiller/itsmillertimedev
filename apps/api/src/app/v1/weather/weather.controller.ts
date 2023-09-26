import {
  CurrentWeather,
  DailyForecast,
  HourlyForecast,
  MinutelyForecast,
  Response,
} from '@itsmillertimedev/data';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { PermissionsPublic } from 'apps/api/src/common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../common/guards/supabaseAuth.guard';
import { WeatherService } from './weather.service';

@Controller({ version: '1', path: 'weather' })
@ApiTags('Weather')
@ApiSecurity('x-api-key')
@UseGuards(supabaseAuthGuard)
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('current')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 400,
    description: 'Must supply valid USA based GPS coordinates',
  })
  @ApiResponse({
    status: 403,
    description:
      'Forbidden, invalid api key supplied or not authorized to access this resource',
  })
  @PermissionsPublic()
  async getCurrentWeather(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): Response<CurrentWeather> {
    return await this.weatherService.getCurrentWeather({ lat, lon });
  }

  @Get('minutely')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 400,
    description: 'Must supply valid USA based GPS coordinates',
  })
  @ApiResponse({
    status: 403,
    description:
      'Forbidden, invalid api key supplied or not authorized to access this resource',
  })
  @PermissionsPublic()
  async getMinutelyForecast(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): Response<MinutelyForecast> {
    return await this.weatherService.getMinutelyForecast({ lat, lon });
  }

  @Get('hourly')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 400,
    description: 'Must supply valid USA based GPS coordinates',
  })
  @ApiResponse({
    status: 403,
    description:
      'Forbidden, invalid api key supplied or not authorized to access this resource',
  })
  @PermissionsPublic()
  async getHourlyForecast(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): Response<HourlyForecast> {
    return await this.weatherService.getHourlyForecast({ lat, lon });
  }

  @Get('daily')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 400,
    description: 'Must supply valid USA based GPS coordinates',
  })
  @ApiResponse({
    status: 403,
    description:
      'Forbidden, invalid api key supplied or not authorized to access this resource',
  })
  @PermissionsPublic()
  async getDailyForecast(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): Response<DailyForecast> {
    return await this.weatherService.getDailyForecast({ lat, lon });
  }

  @Get('alerts')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 400,
    description: 'Must supply valid USA based GPS coordinates',
  })
  @ApiResponse({
    status: 403,
    description:
      'Forbidden, invalid api key supplied or not authorized to access this resource',
  })
  @PermissionsPublic()
  async getAlerts(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): Response<any> {
    return await this.weatherService.getAlerts({ lat, lon });
  }
}
