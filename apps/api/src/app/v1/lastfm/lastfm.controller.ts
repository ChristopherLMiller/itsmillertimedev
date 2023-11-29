import { DataResponse } from '@itsmillertimedev/data';
import { Controller, Get, Param } from '@nestjs/common';

import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { LastFMService } from './lastfm.service';

@Controller({ version: '1', path: 'lastfm' })
export class LastFMController {
  constructor(private lastfm: LastFMService) {}

  @Get('artists')
  @PermissionsPublic()
  async getTopArtists(): DataResponse<any> {
    return { data: await this.lastfm.getTopArtists() };
  }

  @Get('user/:username')
  @PermissionsPublic()
  async getUser(@Param() params): DataResponse<any> {
    return { data: await this.lastfm.getUser(params.username) };
  }

  @Get('playing/:username')
  @PermissionsPublic()
  async getCurrentlyPlaying(@Param() params): DataResponse<any> {
    return { data: await this.lastfm.getCurrentlyPlaying(params.username) };
  }
}
