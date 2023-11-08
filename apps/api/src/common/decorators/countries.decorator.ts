import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const CountriesWhitelist = (
  ...countries: string[]
): CustomDecorator<string> => SetMetadata('whitelistedCountries', countries);
export const CountriesBlacklist = (
  ...countries: string[]
): CustomDecorator<string> => SetMetadata('blacklistedCountries', countries);
