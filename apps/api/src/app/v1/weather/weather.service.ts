import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { dataFetcher } from '../../../common/handlers/dataFetcher';
import { SettingsService } from '../../common/settings/settings.service';

@Injectable()
export class WeatherService {
  constructor(
    private http: HttpService,
    private settings: SettingsService,
  ) {
    this.loadSettings().then((settings) => {
      this.apiKey = settings.apiKey;
      this._logger.log('Settings loaded successfully');
    });
  }

  // Local variables
  private apiKey;
  private readonly _logger = new Logger(WeatherService.name);

  async loadSettings() {
    const apiKey = await this.settings.getFieldValue(
      'openweathermap',
      'api-key',
    );

    return { apiKey };
  }

  async getCurrentWeather({ lat, lon }) {
    const data = await this.getData(
      `onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily`,
    );
    return { data, meta: { lat, lon } };
  }

  async getMinutelyForecast({ lat, lon }) {
    const data = await this.getData(
      `onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,daily,alerts`,
    );
    return { data, meta: { lat, lon } };
  }

  async getHourlyForecast({ lat, lon }) {
    const data = await this.getData(
      `onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts`,
    );
    return { data, meta: { lat, lon } };
  }

  async getDailyForecast({ lat, lon }) {
    const data = await this.getData(
      `onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts`,
    );
    return { data, meta: { lat, lon } };
  }

  async getAlerts({ lat, lon }) {
    const data = await this.getData(
      `onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,daily`,
    );
    return { data, meta: { lat, lon } };
  }

  // METHOD TO RETRIEVE THE DATA
  async getData(url: string): Promise<any> {
    const key = await this.settings.getFieldOld('openweatermap', 'api_key');
    const data = await dataFetcher(
      this.http.get(`${url}&appid=${key}&units=imperial`),
    );
    return data;
  }
}
