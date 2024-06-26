import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";

import { DB, Image } from "@itsmillertimedev/data";
import { DeleteResult, Kysely, Selectable } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { dataFetcher } from "../../../global/handlers/dataFetcher";
import { SettingsService } from "../../common/settings/settings.service";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ExifImage = require("exif").ExifImage;

@Injectable()
export class ImageService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private httpService: HttpService,
    private readonly settings: SettingsService,
  ) {}

  // Local variables
  private readonly _logger = new Logger(ImageService.name);

  async createImage(params): Promise<Selectable<Image>> {
    // check that the image doesn't exist first
    const imageExists = await this.db
      .selectFrom("Image")
      .where("public_id", "=", params.public_id)
      .selectAll()
      .executeTakeFirst();

    if (imageExists) {
      // short circuit out with the image data
      return imageExists;
    }

    // Extract out the data necessary
    const {
      public_id,
      version,
      width,
      height,
      format,
      bytes,
      url,
      secure_url,
    } = params;

    // generate thumbnails & exif
    const thumbnail = await this.createBase64(public_id, 100);
    const exif = await this.createExif(public_id);

    // Insert into the DB
    return this.db
      .insertInto("Image")
      .values([
        {
          public_id,
          version,
          format,
          bytes,
          url,
          secureUrl: secure_url,
          width,
          height,
          thumbnail,
          alt: public_id,
          caption: public_id,
          exif,
        },
      ])
      .returningAll()
      .executeTakeFirst();
  }

  async deleteImage(public_id: string): Promise<DeleteResult[]> {
    return await this.db
      .deleteFrom("Image")
      .where("public_id", "=", public_id)
      .execute();
  }

  async createBase64(
    public_id: string,
    width: number | "auto",
  ): Promise<string> {
    // Retrieve the image from cloudinary
    this._logger.log(
      `${await this.settings.getFieldValue(
        "cloudinary",
        "image-domain",
      )}/w_${width},q_auto,f_auto/${public_id}`,
    );

    const imageData = await dataFetcher(
      this.httpService.get(
        `${await this.settings.getFieldValue(
          "cloudinary",
          "image-domain",
        )}/w_${width},q_auto,f_auto/${public_id}`,
        { responseType: "arraybuffer" },
      ),
    );

    // Convert the buffer data into a base64 string
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: find out why this is erroring on linting
    return Buffer.from(imageData, "binary").toString("base64");
  }

  async createExif(public_id: string): Promise<Image["exif"]> {
    try {
      // Fetch the image
      const imageData = await dataFetcher(
        this.httpService.get(
          `${await this.settings.getFieldValue(
            "cloudinary",
            "image-domain",
          )}/${public_id}`,
          {
            responseType: "arraybuffer",
          },
        ),
      );

      // Extract the EXIF data from the image
      const promiseReponse = new Promise((resolve, reject) => {
        new ExifImage({ image: imageData }, (error, exifData) => {
          if (error) {
            reject(error);
          } else {
            resolve(exifData);
          }
        });
      });

      // this is the meta of the image here
      const exif = (await promiseReponse) as Image["exif"];
      return exif;
    } catch (exception) {
      //TODO: handle bad requests and such here
      this._logger.log(exception);
      return undefined;
    }
  }

  async getImage(public_id: string): Promise<Selectable<Image>> {
    return this.db
      .selectFrom("Image")
      .where("public_id", "=", public_id)
      .selectAll()
      .executeTakeFirst();
  }

  async getThumbnail(public_id: string): Promise<Image["thumbnail"]> {
    // Attempt to get the thumbnail from the DB first
    const fromDB = await this.db
      .selectFrom("Image")
      .where("public_id", "=", public_id)
      .select(["thumbnail", "public_id"])
      .executeTakeFirst();

    if (fromDB?.thumbnail) {
      return fromDB.thumbnail;
    } else {
      // lets insert this into the DB
      const thumbnail = await this.createBase64(public_id, 100);
      return (
        await this.db
          .updateTable("Image")
          .where("public_id", "=", public_id)
          .set("thumbnail", thumbnail)
          .returning("thumbnail")
          .executeTakeFirst()
      ).thumbnail;
    }
  }

  async getExifData(public_id: string): Promise<Partial<Selectable<Image>>> {
    // See if the data already exists
    const fromDB = await this.db
      .selectFrom("Image")
      .where("Image.public_id", "=", public_id)
      .select("Image.exif")
      .executeTakeFirst();

    // If we have exif data from the DB, exit now with it
    if (fromDB?.exif) {
      this._logger.log("returning DB exif");
      this._logger.log(fromDB.exif);
      return fromDB;
    }

    // Fetch the exif data
    const exif = await this.createExif(public_id);

    // If we are caching the result, lets store that
    return this.db
      .updateTable("Image")
      .where("public_id", "=", public_id)
      .set("exif", exif)
      .returning("exif")
      .executeTakeFirst();
  }

  async updateMetadata(public_id: string) {
    return public_id;
  }
}
