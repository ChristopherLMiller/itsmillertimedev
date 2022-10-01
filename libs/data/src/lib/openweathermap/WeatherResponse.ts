import { CurrentWeather } from './CurrentWeather';
import { DailyForecast } from './DailyForecast';
import { HourlyForecast } from './HourlyForecast';
import { MinutelyForecast } from './MinutelyForecast';

export interface WeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current?: CurrentWeather;
  minutely?: MinutelyForecast[];
  hourly?: HourlyForecast[];
  daily?: DailyForecast[];
}
