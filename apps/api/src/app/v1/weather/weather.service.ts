import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom, throwError } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private http: HttpService, private config: ConfigService) {}

  async getCurrentWeather({ lat, lon }) {
    const data = await this.fetchData(
      `onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily`
    );
    return { data, meta: { lat, lon } };
  }

  async getMinutelyForecast({ lat, lon }) {
    const data = await this.fetchData(
      `onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,daily,alerts`
    );
    return { data, meta: { lat, lon } };
  }

  async getHourlyForecast({ lat, lon }) {
    const data = await this.fetchData(
      `onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts`
    );
    return { data, meta: { lat, lon } };
  }

  async getDailyForecast({ lat, lon }) {
    const data = await this.fetchData(
      `onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts`
    );
    return { data, meta: { lat, lon } };
  }

  async getAlerts({ lat, lon }) {
    const data = await this.fetchData(
      `onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,daily`
    );
    return { data, meta: { lat, lon } };
  }

  // METHOD TO RETRIEVE THE DATA
  async fetchData(url: string): Promise<any> {
    const response = this.http
      .get(
        `${url}&appid=${this.config.get(
          'OPENWEATHERMAP_API_KEY'
        )}&units=imperial`
      )
      .pipe(catchError(this.errorHandler));
    const { data } = await firstValueFrom(response);
    return data;
  }

  // HANDLING OF ERRORS WHILE FETCHING DATA
  errorHandler(error: any) {
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
