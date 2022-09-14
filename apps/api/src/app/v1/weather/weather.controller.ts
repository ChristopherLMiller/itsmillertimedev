import {
  BadRequestException,
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
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
// @TODO ClientUUIDinterceptor needs implmeneted fully for caching
@UseInterceptors(ResponseTransformInterceptor) //, ClientUUIDInterceptor)
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
    @Param() params: WeatherLocationDto
  ): Promise<DataResponse<WeatherLocationDto>> {
    if (params.position) return await this.weather.getLocation(params.position);

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
    @Param() params: WeatherLocationDto
  ): Promise<DataResponse<WeatherCurrentDto>> {
    if (params.position)
      return await this.weather.getCurrentWeatherFromCoords(params.position);

    throw new BadRequestException(
      'Must provide location in format of "lat,lon"'
    );
  }
  //#endregion

  //#region Get Weather Using WX Office
  @Get('current/office/:cwa/:gridx/:gridy')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden, invalid api key supplied or unauthorized',
  })
  async getWeatherFromOffice(
    @Param() params: WeatherCurrentDto
  ): Promise<DataResponse<WeatherCurrentDto>> {
    const { cwa, gridX, gridY } = params;

    if (cwa && gridX && gridY)
      return await this.weather.getWeather(cwa, gridX, gridY);

    throw new BadRequestException('Must provide cwa, gridX, and gridY');
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
    @Param() params: WeatherLocationDto
  ): Promise<DataResponse<WeatherZoneDto>> {
    if (params.position)
      return await this.weather.getWeatherZone(params.position);

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
    @Param() params: WeatherLocationDto
  ): Promise<DataResponse<WeatherAlertDto>> {
    return await this.weather.getAlertsFromCoords(params.position);
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
    @Param() params: WeatherZoneDto
  ): Promise<DataResponse<WeatherAlertDto>> {
    if (params.zone) return await this.weather.getAlerts(params.zone);

    throw new BadRequestException('Must provide zone');
  }
  //#endregion
}
