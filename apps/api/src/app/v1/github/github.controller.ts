import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicAuthGuard } from '../../../guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../interceptors/responseTransform.interceptor';
import { GithubService } from './github.service';

@Controller({ version: '1', path: 'github' })
@ApiTags('Github')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor)
export class GithubController {
  constructor(private github: GithubService) {}

  @Get('user/:login')
  getUser(@Param('login') login: string): any {
    return { data: this.github.findUser(login) };
  }
}
