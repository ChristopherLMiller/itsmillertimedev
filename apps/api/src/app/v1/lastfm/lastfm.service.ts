import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { dataFetcher } from '../../../common/handlers/dataFetcher';
import { SettingsService } from '../../settings/settings.service';

@Injectable()
export class LastFMService {
  logger = new Logger(LastFMService.name);

  constructor(
    private http: HttpService,
    private readonly settings: SettingsService
  ) {}

  async getTopArtists() {
    const lastFmKey = this.settings.getField('lastfm', 'api_key');
    const data = await dataFetcher(
      this.http.get('', {
        params: {
          api_key: lastFmKey,
          method: 'chart.gettopartists',
          format: 'json',
        },
      })
    );
    return data;
  }

  async getUser(username: string) {
    const lastFmKey = this.settings.getField('lastfm', 'api_key');
    const data = await dataFetcher(
      this.http.get('', {
        params: {
          api_key: lastFmKey,
          method: 'user.getinfo',
          user: username,
          format: 'json',
        },
      })
    );
    return data;
  }

  async getRecentTracks(username: string) {
    const lastFmKey = this.settings.getField('lastfm', 'api_key');
    const data = await dataFetcher(
      this.http.get('', {
        params: {
          api_key: lastFmKey,
          method: 'user.getRecentTracks',
          user: username,
          format: 'json',
        },
      })
    );
    return data;
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
}
