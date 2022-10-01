import { FeelsLike } from './FeelsLike';
import { Temperature } from './Temperature';
import { WeatherConditions } from './WeatherConditions';

export interface DailyForecast {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temperature;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherConditions[];
  clouds: number;
  pop: number;
  uvi: number;
  rain?: number;
}
