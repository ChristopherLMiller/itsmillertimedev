import { Client, LatLngLiteral } from "@googlemaps/google-maps-services-js";
import { DB, Marker } from "@itsmillertimedev/data";
import { Injectable, Logger } from "@nestjs/common";
import { Insertable, Kysely, Selectable } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { SettingsService } from "../../common/settings/settings.service";

@Injectable()
export class MapsService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private readonly settings: SettingsService,
  ) {}

  // Local variables
  private readonly _logger = new Logger(MapsService.name);
  private gmapsClient = new Client({});

  findMapMarkers(): Promise<Selectable<Marker>[]> {
    return this.db.selectFrom("Marker").selectAll().execute();
  }

  createMapMarker(data: Marker): Promise<Insertable<Marker>> {
    return this.db.insertInto("Marker").values([data]).returningAll().execute();
  }

  async getGPSCoordinateFromLocation(
    place: string,
  ): Promise<{ gps: LatLngLiteral; address: string } | null> {
    const response = await this.gmapsClient.geocode({
      params: {
        address: place,
        key: (await this.settings.getFieldValue(
          "google",
          "maps-api-key",
        )) as string,
      },
    });

    if (response.status !== 200) {
      return null;
    } else {
      const { formatted_address, geometry } = response.data.results[0];
      return { gps: geometry.location, address: formatted_address };
    }
  }
}
