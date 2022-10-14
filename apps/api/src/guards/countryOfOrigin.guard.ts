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
    const whitelist = this.reflector.get('whitelistedCountries', handler);
    const blacklist = this.reflector.get<string[]>(
      'blacklistedCountries',
      handler
    );

    // 4) Extract out the country that Cloudflare has associated with the user
    const userCountry = request.headers['cf-ipcountry'];

    // 5)  Compare user country with the blacklist array
    if (blacklist && blacklist.includes(userCountry)) {
      this.logger.log(
        `Request blocked, user country of origin was on blacklist: ${userCountry}`
      );
      // Not allowed, reject them with a 401
      throw new UnauthorizedException(
        'Your country has been blacklisted from this resource'
      );
    }

    // 6) Compare user country to the whitelist array, if its present they are allowed
    if (whitelist && whitelist.includes(userCountry)) {
      return true;
    }

    // 7) Lastly if the person wasn't filtered by any of the above then allow it,
    // just means their country wasn't affected at all.
    throw new UnauthorizedException(
      "You aren't permitted to access this resource"
    );
  }
}
