import { DataResponse } from '@itsmillertimedev/data';
import { Controller, Get, Param } from '@nestjs/common';

import { LastFMService } from './lastfm.service';

@Controller({ version: '1', path: 'lastfm' })
export class LastFMController {
  constructor(private lastfm: LastFMService) {}

  @Get('artists')
  async getTopArtists(): Promise<DataResponse<any>> {
    return await this.lastfm.getTopArtists();
  }

  @Get('user/:username')
  async getUser(@Param() params): Promise<DataResponse<any>> {
    return await this.lastfm.getUser(params.username);
  }

  @Get('playing/:username')
  async getCurrentlyPlaying(@Param() params): Promise<DataResponse<any>> {
    return await this.lastfm.getCurrentlyPlaying(params.username);
  }
}
