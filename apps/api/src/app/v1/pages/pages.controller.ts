import { DataResponse, Page } from "@itsmillertimedev/data";
import { CacheInterceptor } from "@nestjs/cache-manager";
import { Controller, Get, Param, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Selectable } from "kysely";
import { PagesService } from "./pages.service";

@Controller({ version: "1", path: "pages" })
@ApiTags("Pages")
@UseInterceptors(CacheInterceptor)
export class PagesController {
  constructor(private readonly pageService: PagesService) {}

  @Get("/")
  findAll() {
    return this.pageService.findAll();
  }

  @Get(":slug")
  async findOne(@Param("slug") slug: string): DataResponse<Selectable<Page>> {
    return { data: await this.pageService.findOne(slug) };
  }
}
