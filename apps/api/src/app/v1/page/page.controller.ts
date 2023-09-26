import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../common/guards/supabaseAuth.guard';
import { PageService } from './page.service';

@Controller({ version: '1', path: 'page' })
@ApiTags('Page')
@UseGuards(supabaseAuthGuard)
@ApiSecurity('x-api-key')
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
