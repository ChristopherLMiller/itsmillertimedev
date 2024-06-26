import { DataResponse, Marker } from "@itsmillertimedev/data";
import { CacheInterceptor } from "@nestjs/cache-manager";
import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Insertable, Selectable } from "kysely";
import { PermissionsNodes } from "../../../global/decorators/auth.decorator";
import { MapsPermissionNodes } from "./maps.permissions";
import { MapsService } from "./maps.service";

@Controller({ version: "1", path: "maps" })
@ApiTags("Maps")
@UseInterceptors(CacheInterceptor)
export class MapsController {
  constructor(private maps: MapsService) {}

  @Get("markers")
  async getMarkers(): DataResponse<Selectable<Marker>[]> {
    const data = await this.maps.findMapMarkers();
    return { data, meta: { totalRecords: data.length } };
  }

  @Post("markers")
  @PermissionsNodes(MapsPermissionNodes.CREATE_MARKER)
  async createMarker(@Body() body: Marker): DataResponse<Insertable<Marker>> {
    return { data: await this.maps.createMapMarker(body) };
  }
}
