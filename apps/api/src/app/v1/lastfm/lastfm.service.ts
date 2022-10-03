import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom, throwError } from 'rxjs';

@Injectable()
export class LastFMService {
  logger = new Logger(LastFMService.name);

  constructor(
    private http: HttpService,
    private readonly config: ConfigService
  ) {}

  async getTopArtists() {
    const response = this.http
      .get('', {
        params: {
          api_key: this.config.get('LASTFM_API_KEY'),
          method: 'chart.gettopartists',
          format: 'json',
        },
      })
      .pipe(catchError(this.errorHandler));
    const { data } = await firstValueFrom(response);
    return { data, meta: { count: data.artists.artist.length } };
  }

  async getUser(username: string) {
    const response = this.http
      .get('', {
        params: {
          api_key: this.config.get('LASTFM_API_KEY'),
          method: 'user.getinfo',
          user: username,
          format: 'json',
        },
      })
      .pipe(catchError(this.errorHandler));
    const { data } = await firstValueFrom(response);
    return { data, meta: { username } };
  }

  async getRecentTracks(username: string) {
    const response = this.http
      .get('', {
        params: {
          api_key: this.config.get('LASTFM_API_KEY'),
          method: 'user.getRecentTracks',
          user: username,
          format: 'json',
        },
      })
      .pipe(catchError(this.errorHandler));
    const { data } = await firstValueFrom(response);
    return { data, meta: { username } };
  }

  async getCurrentlyPlaying(username: string) {
    const { data } = await this.getRecentTracks(username);
    const newestTrack = data.recenttracks.track[0];

    // see if the track contains an element called @attr and if its got now playing as true,
    // this signifies that the track is playing right now, return it
    if (newestTrack['@attr']?.nowplaying) {
      return { data: newestTrack, meta: { isPlaying: true } };
    } else {
      return { data: [], meta: { isPlaying: false } };
    }
  }

  errorHandler(error: any) {
    switch (error.response.status) {
      case HttpStatus.BAD_REQUEST:
        console.log(error);
        return throwError(() => new BadRequestException(error));
      case HttpStatus.UNAUTHORIZED:
        return throwError(() => new UnauthorizedException(error));
      case HttpStatus.INTERNAL_SERVER_ERROR:
        return throwError(() => new InternalServerErrorException(error));
      case HttpStatus.NOT_FOUND:
        console.log(error.response.data.message);
        return throwError(
          () => new NotFoundException(error.response.data.message)
        );
      default:
        return throwError(() => new Error(error));
    }
  }
}
