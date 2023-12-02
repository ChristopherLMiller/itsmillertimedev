import { CacheInterceptor } from '@nestjs/cache-manager';
import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { PagesService } from './pages.service';

@Controller({ version: '1', path: 'pages' })
@ApiTags('Pages')
@UseInterceptors(CacheInterceptor)
export class PagesController {
  constructor(private readonly pageService: PagesService) {}

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
