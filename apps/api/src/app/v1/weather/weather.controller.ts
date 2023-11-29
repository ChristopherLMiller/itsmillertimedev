import {
  CurrentWeather,
  DailyForecast,
  HourlyForecast,
  MinutelyForecast,
} from '@itsmillertimedev/data';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { DataResponse } from '../../../lib/response';
import { WeatherService } from './weather.service';

@Controller({ version: '1', path: 'weather' })
@ApiTags('Weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('current')
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Must supply valid USA based GPS coordinates',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description:
      'Forbidden, invalid api key supplied or not authorized to access this resource',
  })
  @PermissionsPublic()
  async getCurrentWeather(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): DataResponse<CurrentWeather> {
    return await this.weatherService.getCurrentWeather({ lat, lon });
  }

  @Get('minutely')
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Must supply valid USA based GPS coordinates',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description:
      'Forbidden, invalid api key supplied or not authorized to access this resource',
  })
  @PermissionsPublic()
  async getMinutelyForecast(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): DataResponse<MinutelyForecast> {
    return await this.weatherService.getMinutelyForecast({ lat, lon });
  }

  @Get('hourly')
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Must supply valid USA based GPS coordinates',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description:
      'Forbidden, invalid api key supplied or not authorized to access this resource',
  })
  @PermissionsPublic()
  async getHourlyForecast(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): DataResponse<HourlyForecast> {
    return await this.weatherService.getHourlyForecast({ lat, lon });
  }

  @Get('daily')
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Must supply valid USA based GPS coordinates',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description:
      'Forbidden, invalid api key supplied or not authorized to access this resource',
  })
  @PermissionsPublic()
  async getDailyForecast(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): DataResponse<DailyForecast> {
    return await this.weatherService.getDailyForecast({ lat, lon });
  }

  @Get('alerts')
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Must supply valid USA based GPS coordinates',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description:
      'Forbidden, invalid api key supplied or not authorized to access this resource',
  })
  @PermissionsPublic()
  async getAlerts(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): DataResponse<any> {
    return await this.weatherService.getAlerts({ lat, lon });
  }
}
