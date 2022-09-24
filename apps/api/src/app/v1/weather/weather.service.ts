import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { DataResponse } from '../../../../DataResponse';
import { GPSLocationDto, WeatherOffice } from './weather.types';

@Injectable()
export class WeatherService {
  constructor(private http: HttpService) {}

  async getWeatherInfoFromGPSCoordinates(
    position: GPSLocationDto,
    request: Request
  ): Promise<DataResponse<WeatherOffice>> {
    const data = await this.fetchDataNWS(`/points/${position}`, request);

    const weatherOffice = data?.properties?.gridId;
    const gridX = data?.properties?.gridX;
    const gridY = data?.properties?.gridY;
    const locationName = `${data?.properties?.relativeLocation?.properties?.city}, ${data?.properties?.relativeLocation?.properties?.state}`;
    const alertZone = data?.properties?.county?.slice(
      data?.properties?.county.length - 6
    );

    return {
      data: {
        weatherOffice,
        gridX,
        gridY,
        alertZone,
        locationName,
      },
      meta: { position },
    };
  }

  async getAlerts(zone: string, request: Request): Promise<DataResponse<any>> {
    const data = await this.fetchDataNWS(
      `/alerts/active/zone/${zone}`,
      request
    );

    return {
      data,
      meta: { zone },
    };
  }

  weatherUserAgentString(request: Request): string {
    const userHost =
      request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    return `(${userHost}-api.itsmillertime.dev admin@itsmillertime.dev)`;
  }

  async fetchDataNWS(url: string, request: Request): Promise<any> {
    const response = this.http
      .get(url, {
        headers: { 'User-Agent': this.weatherUserAgentString(request) },
      })
      .pipe(catchError(this.weatherServiceErrorHandler));
    const { data } = await firstValueFrom(response);
    return data;
  }

  weatherServiceErrorHandler(error: any) {
    switch (error.response.status) {
      case HttpStatus.BAD_REQUEST:
        return throwError(() => new BadRequestException(error));
      case HttpStatus.UNAUTHORIZED:
        return throwError(() => new UnauthorizedException(error));
      case HttpStatus.INTERNAL_SERVER_ERROR:
        return throwError(() => new InternalServerErrorException(error));
      case HttpStatus.NOT_FOUND:
        return throwError(
          () => new NotFoundException(error.response.data.detail)
        );
      default:
        return throwError(() => new Error(error));
    }
  }
}
