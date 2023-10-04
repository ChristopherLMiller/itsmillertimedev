import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Image, Prisma } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';

import { dataFetcher } from '../../../common/handlers/dataFetcher';
import { PrismaService } from '../../common/prisma/prisma.service';
import { SettingsService } from '../../common/settings/settings.service';
import streamifier = require('streamifier');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ExifImage = require('exif').ExifImage;

@Injectable()
export class ImageService {
  constructor(
    private httpService: HttpService,
    private prisma: PrismaService,
    private readonly settings: SettingsService,
  ) {}

  logger = new Logger();

  async createImage(params): Promise<Image> {
    // check that the image doesn't exist first
    const ImageExists = await this.prisma.image.findUnique({
      where: { public_id: params.public_id },
    });
    if (ImageExists) {
      // short circuit out with the image data
      return ImageExists;
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
        thumbnail,
        alt: public_id,
        caption: public_id,
        exif,
      },
    });
    return result;
  }

  async deleteImage(public_id: string): Promise<string> {
    try {
      await this.prisma.image.delete({
        where: { public_id: public_id },
      });
      return 'Record deleted Successfully';
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        this.logger.log(error);
        // Prisma error code for record doesn't exist
        if (error.code === 'P2025') {
          return error.meta['cause'] as string;
        }
      }
    }
  }

  async createBase64(
    public_id: string,
    width: number | 'auto',
  ): Promise<string> {
    const settings = await this.settings.getSetting('cloudinary');
    // Retrieve the image from cloudinary
    this.logger.log(
      `${settings['image_domain']}/w_${width},q_auto,f_auto/${public_id}`,
    );

    const imageData = await dataFetcher(
      this.httpService.get(
        `${settings['image_domain']}/w_${width},q_auto,f_auto/${public_id}`,
        { responseType: 'arraybuffer' },
      ),
    );

    // Convert the buffer data into a base64 string
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: find out why this is erroring on linting
    return Buffer.from(imageData, 'binary').toString('base64');
  }

  async createExif(public_id: string): Promise<Image['exif']> {
    const settings = this.settings.getSetting('cloudinary');
    try {
      // Fetch the image
      const imageData = await dataFetcher(
        this.httpService.get(`${settings['image_domain']}/${public_id}`, {
          responseType: 'arraybuffer',
        }),
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
      const exif = (await promiseReponse) as Image['exif'];
      return exif;
    } catch (exception) {
      //TODO: handle bad requests and such here
      this.logger.log(exception);
      return undefined;
    }
  }

  async getImage(public_id: string): Promise<Image> {
    return this.prisma.image.findUnique({ where: { public_id } });
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

  async getExifData(public_id: string): Promise<Image> {
    // See if the data already exists
    const fromDB = await this.prisma.image.findUnique({
      where: { public_id },
    });

    // If we have exif data from the DB, exit now with it
    if (fromDB?.exif) {
      this.logger.log('returning DB exif');
      this.logger.log(fromDB.exif);
      return fromDB;
    }

    // Fetch the exif data
    const exif = await this.createExif(public_id);

    // If we are caching the result, lets store that
    const result = await this.prisma.image.upsert({
      where: { public_id },
      create: { public_id, exif },
      update: { public_id, exif },
    });
    return result;
  }

  async uploadImage(file: Express.Multer.File): Promise<any> {
    const settings = this.settings.getSetting('cloudinary');
    cloudinary.config({
      api_key: settings['api_key'],
      api_secret: settings['api_secret'],
      cloud_name: settings['cloud'],
    });

    try {
      const date = new Date();

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          upload_preset: settings['upload_preset'],
          use_filename: true,
          filename_override: file.originalname,
          folder: `${settings['folder']}/${date.getFullYear().toString()}/${(
            date.getMonth() + 1
          ).toString()}`,
        },
        (error, result) => {
          if (error) {
            this.logger.log(error);
            throw new Error(error.message);
          }

          return result;
        },
      );

      // create the stream, upload to cloudinary
      streamifier.createReadStream(file.buffer).pipe(uploadStream);

      return 'File uploaded successfully';
    } catch (error) {
      this.logger.log(error);
    }
  }

  async updateMetadata(public_id: string) {
    return null;
  }
}
