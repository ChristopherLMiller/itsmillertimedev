import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { PageService } from './page.service';

@Controller({ version: '1', path: 'page' })
@ApiTags('Page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get('/')
  @PermissionsPublic()
  findAll() {
    return this.pageService.findAll();
  }

  @Get(':slug')
  @PermissionsPublic()
  findOne(@Param('slug') slug: string) {
    return this.pageService.findOne(slug);
  }
}
