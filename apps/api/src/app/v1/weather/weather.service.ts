import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { catchError, firstValueFrom } from 'rxjs';
import { DataResponse } from '../../../../DataResponse';
import { handleAxiosError } from '../../handleAxiosError';

@Injectable()
export class WeatherService {
  constructor(private http: HttpService) {}

  // Fetch the location name from the lat and lon, this data is used to display the location name in the UI
  // as well as in the weather forecast for weather forecast grid.
  async getLocation(
    position: string,
    request: Request
  ): Promise<DataResponse<any>> {
    const data = await this.fetchWeatherdata(`/points/${position}`, request);

    // extract out values we care about
    const weatherOffice = data?.properties?.cwa;
    const gridX = data?.properties?.gridX;
    const gridY = data?.properties?.gridY;
    const locationName = `${data?.properties?.relativeLocation?.properties?.city}, ${data?.properties?.relativeLocation?.properties?.state}`;

    // Return the data we care about
    return {
      data: { weatherOffice, gridX, gridY, locationName, data },
      meta: { position },
    };
  }

  async getCurrentWeatherFromCoords(
    position: string,
    request: Request
  ): Promise<DataResponse<any>> {
    // Start by getting the weather office, used to query for the forecast;
    const { data } = await this.getLocation(position, request);

    // Get the weather now
    const currentWeather = await this.getWeather(
      `${data.weatherOffice},${data.gridX},${data.gridY}`,
      request
    );

    return {
      data: currentWeather.data,
      meta: { position },
    };
  }

  async getWeather(wx: string, request: Request): Promise<DataResponse<any>> {
    const data = await this.fetchWeatherdata(
      `/gridpoints/${wx}/forecast`,
      request
    );

    return {
      data,
      meta: { wx },
    };
  }

  async getWeatherZone(
    position: string,
    request: Request
  ): Promise<DataResponse<any>> {
    const data = await this.fetchWeatherdata(
      `/zones?point=${position}`,
      request
    );

    return {
      data: { zone: data.features[0].properties.id },
      meta: { position },
    };
  }

  async getAlertsFromCoords(
    coords: string,
    request: Request
  ): Promise<DataResponse<any>> {
    const zone = await this.getWeatherZone(coords, request);
    const alerts = await this.getAlerts(zone.data.zone, request);
    return { data: alerts, meta: { coords } };
  }

  async getAlerts(zone: string, request: Request): Promise<DataResponse<any>> {
    const data = await this.fetchWeatherdata(
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

  async fetchWeatherdata(url: string, request: Request): Promise<any> {
    const response = this.http
      .get(url, {
        headers: { 'User-Agent': this.weatherUserAgentString(request) },
      })
      .pipe(catchError(handleAxiosError));
    const { data } = await firstValueFrom(response);
    return data;
  }
}
