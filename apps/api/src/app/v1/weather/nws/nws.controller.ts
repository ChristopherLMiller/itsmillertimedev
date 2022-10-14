import { WeatherOffice } from '@itsmillertimedev/data';
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
import { DataResponse } from '../../../../../DataResponse';
import { CountriesBlacklist } from '../../../../decorators/countries.decorator';
import { BasicAuthGuard } from '../../../../guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../../interceptors/responseTransform.interceptor';
import { NWSWeatherService } from './nws.service';
import { GPSLocationDto, WeatherAlert, WeatherZoneDto } from './nws.types';

@Controller({ version: '1', path: 'weather/nws' })
@ApiTags('Weather', 'NationalWeatherService')
@ApiSecurity('x-api-key')
@UseGuards(BasicAuthGuard) //, CountryOfOriginGuard)
@UseInterceptors(ResponseTransformInterceptor)
@CacheTTL(5000)
@CountriesBlacklist('RU')
export class NWSWeatherController {
  constructor(private weather: NWSWeatherService) {}

  //#region National Weather Service API endpoints
  @Get('info/:position')
  @CacheTTL(86400)
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
  @Get('alerts/:zone')
  @CacheTTL(60 * 5)
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
}
