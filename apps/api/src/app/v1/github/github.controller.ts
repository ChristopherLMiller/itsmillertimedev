import { DataResponse } from '@itsmillertimedev/data';
import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicAuthGuard } from '../../../common/guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../common/interceptors/responseTransform.interceptor';
import { GithubService } from './github.service';

@Controller({ version: '1', path: 'github' })
@ApiTags('Github')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor)
export class GithubController {
  constructor(private github: GithubService) {}

  @Get('user/:login')
  async getUser(@Param('login') login: string): Promise<DataResponse<any>> {
    return { data: await this.github.findUser(login) };
  }
}
