import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { DataResponse } from 'apps/api/DataResponse';
import { catchError, firstValueFrom } from 'rxjs';
import { handleAxiosError } from '../../handleAxiosError';

@Injectable()
export class WeatherService {
  constructor(private http: HttpService) {}

  // Fetch the location name from the lat and lon, this data is used to display the location name in the UI
  // as well as in the weather forecast for weather forecast grid.
  async getLocation(position: string): Promise<DataResponse<any>> {
    const response = this.http
      .get(`/points/${position}`)
      .pipe(catchError(handleAxiosError));
    const { data } = await firstValueFrom(response);

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
    position: string
  ): Promise<DataResponse<any>> {
    // Start by getting the weather office, used to query for the forecast;
    const { data } = await this.getLocation(position);

    // Get the weather now
    const currentWeather = await this.getWeather(
      data.weatherOffice,
      data.gridX,
      data.gridY
    );

    return {
      data: currentWeather.data,
      meta: { position },
    };
  }

  async getWeather(
    cwa: string,
    gridX: string,
    gridY: string
  ): Promise<DataResponse<any>> {
    const response = this.http
      .get(`/gridpoints/${cwa}/${gridX},${gridY}/forecast`)
      .pipe(catchError(handleAxiosError));
    const { data } = await firstValueFrom(response);

    return {
      data,
      meta: { cwa, gridX, gridY },
    };
  }

  async getWeatherZone(position: string): Promise<DataResponse<any>> {
    const reponse = this.http
      .get(`/zones?point=${position}`)
      .pipe(catchError(handleAxiosError));
    const { data } = await firstValueFrom(reponse);
    console.log(data.features[0].properties.id);

    return {
      data: { zone: data.features[0].properties.id },
      meta: { position },
    };
  }

  async getAlertsFromCoords(coords: string): Promise<DataResponse<any>> {
    const zone = await this.getWeatherZone(coords);
    const alerts = await this.getAlerts(zone.data.zone);
    return { data: alerts, meta: { coords } };
  }

  async getAlerts(zone: string): Promise<DataResponse<any>> {
    const response = this.http
      .get(`/alerts/active/zone/${zone}`)
      .pipe(catchError(handleAxiosError));
    const { data } = await firstValueFrom(response);

    return {
      data,
      meta: { zone },
    };
  }
}
