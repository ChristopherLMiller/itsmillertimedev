import { GithubUser } from '@itsmillertimedev/data';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../common/guards/supabaseAuth.guard';
import { DataResponse } from '../../../lib/response';
import { GithubService } from './github.service';
@Controller({ version: '1', path: 'github' })
@ApiTags('Github')
@UseGuards(supabaseAuthGuard)
export class GithubController {
  constructor(private github: GithubService) {}

  @Get('user/:login')
  @ApiOperation({ description: 'Gets a Github users profile' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'successfully fetched profile',
  })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Unable to find the specified user',
  })
  @PermissionsPublic()
  async getUser(@Param('login') login: string): DataResponse<GithubUser> {
    return { data: await this.github.findUser(login) };
  }
}
