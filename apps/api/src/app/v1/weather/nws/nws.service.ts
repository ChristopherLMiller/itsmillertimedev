import { WeatherOffice } from '@itsmillertimedev/data';
import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { Request } from 'express';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { DataResponse } from '../../../../../DataResponse';
import { GPSLocationDto } from './nws.types';

@Injectable()
export class NWSWeatherService {
  constructor(private http: HttpService) {}

  async getWeatherInfoFromGPSCoordinates(
    position: GPSLocationDto,
    userAgent: Request | string
  ): Promise<DataResponse<WeatherOffice>> {
    const data = await this.fetchDataNWS(`/points/${position}`, userAgent);

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

  async getAlerts(
    zone: string,
    userAgent: Request | string
  ): Promise<DataResponse<any>> {
    const data = await this.fetchDataNWS(
      `/alerts/active/zone/${zone}`,
      userAgent
    );

    return {
      data,
      meta: { zone },
    };
  }

  weatherUserAgentString(userAgent: Request | string): string {
    // setup the variable as blank to begin with
    let userHost = '';

    // check the type of the userAgent provided, if its string then we use that, otherwise its the request
    if (typeof userAgent === 'string') {
      userHost = userAgent;
    } else {
      userHost =
        (userAgent.headers['x-forwarded-for'] as string) ||
        userAgent.socket.remoteAddress;
    }
    return `(${userHost}-api.itsmillertime.dev admin@itsmillertime.dev)`;
  }

  async fetchDataNWS(url: string, userAgent: Request | string): Promise<any> {
    const response = this.http
      .get(url, {
        headers: { 'User-Agent': this.weatherUserAgentString(userAgent) },
      })
      .pipe(catchError(this.weatherServiceErrorHandler));
    const { data } = await firstValueFrom(response);
    return data;
  }

  weatherServiceErrorHandler(error: AxiosError) {
    console.log(error);
    switch (error.response.request) {
      case HttpStatus.BAD_REQUEST:
        return throwError(() => new BadRequestException(error));
      case HttpStatus.UNAUTHORIZED:
        return throwError(() => new UnauthorizedException(error));
      case HttpStatus.INTERNAL_SERVER_ERROR:
        return throwError(() => new InternalServerErrorException(error));
      case HttpStatus.NOT_FOUND:
        // This one is an exception for NWS as a GPS position not in the US will return a 404
        // This allows it to basically handle gracefully so it doesn't appear as an error as its not really
        return throwError(
          () =>
            new HttpException(
              {
                data: [],
                error: { message: error.response.data['detail'] },
                statusCode: 200,
              },
              200
            )
        );
      default:
        return throwError(() => new Error('Unhandled Exception'));
    }
  }
}
