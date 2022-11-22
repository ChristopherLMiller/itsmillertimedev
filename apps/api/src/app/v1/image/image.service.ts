import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Image } from '@prisma/client';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from '../../../prisma/prisma.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ExifImage = require('exif').ExifImage;

@Injectable()
export class ImageService {
  constructor(
    private httpService: HttpService,
    private prisma: PrismaService,
    private readonly config: ConfigService
  ) {}

  async createImage(params): Promise<Image> {
    console.log(params);
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
    const base64 = await this.createBase64(public_id, width);
    const thumbnail = await this.createBase64(public_id, 100);
    const exif = await this.createExif(public_id);

    // Insert into the DB
    const result = this.prisma.image.create({
      data: {
        public_id,
        version,
        format,
        bytes,
        url,
        secureUrl: secure_url,
        width,
        height,
        base64,
        thumbnail,
        alt: public_id,
        caption: public_id,
        exif,
      },
    });
    return result;
  }

  async deleteImage(public_id: string): Promise<Image> {
    return this.prisma.image.delete({ where: { public_id: public_id } });
  }

  async createBase64(
    public_id: string,
    width: number | 'auto'
  ): Promise<string> {
    // Retrieve the image from cloudinary
    const imageData = await firstValueFrom(
      this.httpService.get(
        `${this.config.get(
          'IMAGE_ENDPOINT'
        )}/w_${width},q_auto,f_auto/${public_id}`,
        { responseType: 'arraybuffer' }
      )
    );
    // Convert the buffer data into a base64 string
    return Buffer.from(imageData.data, 'binary').toString('base64');
  }

  async createExif(public_id: string): Promise<Image['exif']> {
    try {
      // Fetch the image
      const imageData = await firstValueFrom(
        this.httpService.get(
          `${this.config.get('IMAGE_ENDPOINT')}/${public_id}`,
          {
            responseType: 'arraybuffer',
          }
        )
      );

      // Extract the EXIF data from the image
      const promiseReponse = new Promise((resolve, reject) => {
        new ExifImage({ image: imageData.data }, (error, exifData) => {
          if (error) {
            reject(error);
          } else {
            resolve(exifData);
          }
        });
      });

      // this is the meta of the image here
      const exif = (await promiseReponse) as Image['exif'];
      return exif;
    } catch (exception) {
      return {};
    }
  }

  async getImage(public_id: string): Promise<Image> {
    return this.prisma.image.findUnique({ where: { public_id } });
  }

  async getBase64EncodedVersion(public_id: string): Promise<Image['base64']> {
    // Attemp to fetch from the DB first
    const imageFromDB = await this.prisma.image.findUnique({
      where: { public_id },
    });

    // Image was found or not
    if (imageFromDB?.base64) {
      return imageFromDB.base64;
    } else {
      // Now lets insert that into the DB and return it
      const result = await this.prisma.image.upsert({
        where: {
          public_id,
        },
        create: {
          public_id,
          base64: await this.createBase64(public_id, 'auto'),
        },
        update: {
          public_id,
          base64: await this.createBase64(public_id, 'auto'),
        },
      });
      return result.base64;
    }
  }

  async getThumbnail(public_id: string): Promise<Image['thumbnail']> {
    // Attempt to get the thumbnail from the DB first
    const fromDB = await this.prisma.image.findUnique({ where: { public_id } });

    if (fromDB?.thumbnail) {
      return fromDB.thumbnail;
    } else {
      // lets insert this into the DB
      const result = await this.prisma.image.upsert({
        where: {
          public_id,
        },
        create: {
          public_id,
          thumbnail: await this.createBase64(public_id, 100),
        },
        update: {
          public_id,
          thumbnail: await this.createBase64(public_id, 100),
        },
      });

      return result.thumbnail;
    }
  }

  async getExifData(public_id: string): Promise<Image['exif']> {
    // See if the data already exists
    const fromDB = await this.prisma.image.findUnique({
      where: { public_id },
    });

    // If we have exif data from the DB, exit now with it
    if (fromDB?.exif) {
      return fromDB.exif;
    }

    // Fetch the exif data
    const exif = await this.createExif(public_id);

    // If we are caching the result, lets store that
    const result = await this.prisma.image.upsert({
      where: { public_id },
      create: { public_id, exif },
      update: { public_id, exif },
    });
    return result.exif;
  }

  async updateMetadata(public_id: string) {
    return null;
  }
}
