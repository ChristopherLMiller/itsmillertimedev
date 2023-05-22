import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { BasicAuthGuard } from '../../../common/guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../common/interceptors/responseTransform.interceptor';
import { PageService } from './page.service';

@Controller({ version: '1', path: 'page' })
@ApiTags('Page')
@UseGuards(BasicAuthGuard)
@ApiSecurity('x-api-key')
@UseInterceptors(ResponseTransformInterceptor)
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get('/')
  findAll() {
    return this.pageService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.pageService.findOne(slug);
  }
}
