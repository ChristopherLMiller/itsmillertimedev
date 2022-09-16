import {
  BadRequestException,
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
  WeatherAlertDto,
  WeatherCurrentDto,
  WeatherLocationDto,
  WeatherZoneDto,
} from './weather.types';

@Controller({ version: '1', path: 'weather' })
@ApiTags('Weather')
@ApiSecurity('x-api-key')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor)
export class WeatherController {
  constructor(private weather: WeatherService) {}

  //#region GeoLocation
  @Get('location/:position')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 400,
    description:
      'Bad Request.  Must provide GPS coordinates in format of "lat,lon"',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden, invalid api key supplied or unauthorized',
  })
  async getLocation(
    @Param() params: WeatherLocationDto,
    @Req() request: Request
  ): Promise<DataResponse<WeatherLocationDto>> {
    if (params.position)
      return await this.weather.getLocation(params.position, request);

    throw new BadRequestException(
      'Must provide location in format of "lat,lon"'
    );
  }
  //#endregion

  //#region Current Weather From GPS Coords
  @Get('current/coords/:position')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 400,
    description:
      'Bad Request.  Must provide GPS coordinates in form of "lat,lon"',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden, invalid api key supplied or unauthorized',
  })
  async getWeatherFromCoords(
    @Param() params: WeatherLocationDto,
    @Req() request: Request
  ): Promise<DataResponse<WeatherCurrentDto>> {
    if (params.position)
      return await this.weather.getCurrentWeatherFromCoords(
        params.position,
        request
      );

    throw new BadRequestException(
      'Must provide location in format of "lat,lon"'
    );
  }
  //#endregion

  //#region Get Weather Using WX Office
  @Get('current/office/:wx')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden, invalid api key supplied or unauthorized',
  })
  async getWeatherFromOffice(
    @Param() params: WeatherCurrentDto,
    @Req() request: Request
  ): Promise<DataResponse<WeatherCurrentDto>> {
    const { wx } = params;
    if (wx) return await this.weather.getWeather(wx, request);

    throw new BadRequestException(
      'Must provide the weather office in form of "[office],[gridX],[gridY]'
    );
  }
  //#endregion

  //#region Get Weather Zone
  @Get('zone/:position')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden, invalid api key supplied or unauthorized',
  })
  async getWeatherZone(
    @Param() params: WeatherLocationDto,
    @Req() request: Request
  ): Promise<DataResponse<WeatherZoneDto>> {
    if (params.position)
      return await this.weather.getWeatherZone(params.position, request);

    throw new BadRequestException('Must provide position');
  }
  //#endregion

  //#region Get Alerts for GPS Position
  @Get('alerts/coords/:position')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden, invalid api key supplied or unauthorized',
  })
  async getAlertsFromCoords(
    @Param() params: WeatherLocationDto,
    @Req() request: Request
  ): Promise<DataResponse<WeatherAlertDto>> {
    return await this.weather.getAlertsFromCoords(params.position, request);
  }
  //#endregion

  //#region Get alerts for specified zone
  @Get('alerts/zone/:zone')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden, invalid api key supplied or unauthorized',
  })
  async getAlertsFromZone(
    @Param() params: WeatherZoneDto,
    @Req() request: Request
  ): Promise<DataResponse<WeatherAlertDto>> {
    if (params.zone) return await this.weather.getAlerts(params.zone, request);

    throw new BadRequestException('Must provide zone');
  }
  //#endregion
}
