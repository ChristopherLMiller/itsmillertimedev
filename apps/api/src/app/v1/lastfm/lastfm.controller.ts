import { CacheTTL, Controller, Get, Param } from '@nestjs/common';
import { DataResponse } from '../../../../DataResponse';
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

  @CacheTTL(5)
  @Get('playing/:username')
  async getCurrentlyPlaying(@Param() params): Promise<DataResponse<any>> {
    return await this.lastfm.getCurrentlyPlaying(params.username);
  }
}
