import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { BasicAuthGuard } from '../../../common/guards/basicAuth.guard';
import { PageService } from './page.service';

@Controller({ version: '1', path: 'page' })
@ApiTags('Page')
@UseGuards(BasicAuthGuard)
@ApiSecurity('x-api-key')
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
