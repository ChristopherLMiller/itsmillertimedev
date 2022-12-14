import {
  CurrentWeather,
  DailyForecast,
  HourlyForecast,
  MinutelyForecast,
} from '@itsmillertimedev/data';
import {
  CacheTTL,
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { DataResponse } from '../../../../DataResponse';
import { BasicAuthGuard } from '../../../guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../interceptors/responseTransform.interceptor';
import { WeatherService } from './weather.service';

@Controller({ version: '1', path: 'weather' })
@ApiTags('Weather')
@ApiSecurity('x-api-key')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor)
@CacheTTL(5000)
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('current')
  @CacheTTL(60)
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
  async getCurrentWeather(
    @Query('lat') lat: string,
    @Query('lon') lon: string
  ): Promise<DataResponse<CurrentWeather>> {
    return await this.weatherService.getCurrentWeather({ lat, lon });
  }

  @Get('minutely')
  @CacheTTL(60)
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
  async getMinutelyForecast(
    @Query('lat') lat: string,
    @Query('lon') lon: string
  ): Promise<DataResponse<MinutelyForecast>> {
    return await this.weatherService.getMinutelyForecast({ lat, lon });
  }

  @Get('hourly')
  @CacheTTL(60 * 60)
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
  async getHourlyForecast(
    @Query('lat') lat: string,
    @Query('lon') lon: string
  ): Promise<DataResponse<HourlyForecast>> {
    return await this.weatherService.getHourlyForecast({ lat, lon });
  }

  @Get('daily')
  @CacheTTL(60 * 60)
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
  async getDailyForecast(
    @Query('lat') lat: string,
    @Query('lon') lon: string
  ): Promise<DataResponse<DailyForecast>> {
    return await this.weatherService.getDailyForecast({ lat, lon });
  }

  @Get('alerts')
  @CacheTTL(60)
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
  async getAlerts(
    @Query('lat') lat: string,
    @Query('lon') lon: string
  ): Promise<DataResponse<any>> {
    return await this.weatherService.getAlerts({ lat, lon });
  }
}
