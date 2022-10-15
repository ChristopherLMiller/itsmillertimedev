import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class CountryOfOriginGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly config: ConfigService
  ) {}

  logger = new Logger(CountryOfOriginGuard.name);

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const handler = context.getClass();
    const request = context.switchToHttp().getRequest();

    // The proecess to determine if person is able to access the resource is as follows:

    // 1) Check if dev, we auto allow this
    // if (process.env.NODE_ENV === 'development') return true;

    // 2) If we are in production, check that the 'cf-ipcountry' header is present from Cloudflare
    if (!request.headers['cf-ipcountry']) {
      this.logger.log(
        `Header 'cf-ipcountry' missing in the request, therefore action blocked`
      );
      throw new UnauthorizedException();
    }

    // 3)  If we made it this far, lets extract out the whitelist and blacklist properties to evaluate further
    const whitelist = this.reflector.get<string[]>(
      'whitelistedCountries',
      handler
    );
    const blacklist = this.reflector.get<string[]>(
      'blacklistedCountries',
      handler
    );

    // 4) Extract out the country that Cloudflare has associated with the user
    const userCountry = request.headers['cf-ipcountry'];

    // 5) Check against blacklist
    if (blacklist && blacklist.includes(userCountry)) {
      throw new UnauthorizedException(
        'Your country has been blacklisted from accessing this resource'
      );
    }

    // 6) Compare against the whitelist next
    if (whitelist && !whitelist.includes(userCountry)) {
      throw new UnauthorizedException(
        "Your country isn't on the whitelist to access this resource"
      );
    }

    // 7)  Return true otherwise, means they weren't filtered out by white or black list
    return true;
  }
}
