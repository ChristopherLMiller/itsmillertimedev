import {
  BadRequestException,
  CacheTTL,
  Controller,
  Get,
  Param,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { DataResponse } from '../../../../DataResponse';
import { BasicAuthGuard } from '../../../guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../interceptors/responseTransform.interceptor';
import { WeatherService } from './weather.service';
import {
  GPSLocationDto,
  WeatherAlert,
  WeatherOffice,
  WeatherZoneDto,
} from './weather.types';

@Controller({ version: '1', path: 'weather' })
@ApiTags('Weather')
@ApiSecurity('x-api-key')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor)
@CacheTTL(5000)
export class WeatherController {
  constructor(private weather: WeatherService) {}

  //#region National Weather Service API endpoints
  @Get('nws/info/:position')
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
  async getWeatherOfficeFromGPSCoordinates(
    @Param('position') position: GPSLocationDto,
    @Req() request: Request
  ): Promise<DataResponse<WeatherOffice>> {
    return await this.weather.getWeatherInfoFromGPSCoordinates(
      position,
      request
    );
  }
  @Get('nws/alerts/:zone')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - Check the zone identifier passed in',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden, invalid api key supplied or unauthorized',
  })
  async getAlertsFromZone(
    @Param() params: WeatherZoneDto,
    @Req() request: Request
  ): Promise<DataResponse<WeatherAlert>> {
    if (params.zone) return await this.weather.getAlerts(params.zone, request);

    throw new BadRequestException('Must provide zone');
  }
  //#endregion

  //#region OpenWeatherMapAPI

  //#endregion
}
