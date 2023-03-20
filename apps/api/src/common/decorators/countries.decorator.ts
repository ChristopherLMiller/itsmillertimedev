import { SetMetadata } from '@nestjs/common';

export const CountriesWhitelist = (...countries: string[]) =>
  SetMetadata('whitelistedCountries', countries);
export const CountriesBlacklist = (...countries: string[]) =>
  SetMetadata('blacklistedCountries', countries);
