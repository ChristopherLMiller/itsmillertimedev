import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Image, Prisma } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from '../../../common/prisma/prisma.service';
import streamifier = require('streamifier');

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
    // TODO: try/catch, key might exist and if so just exit
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
        console.log(error);
        // Prisma error code for record doesn't exist
        if (error.code === 'P2025') {
          return error.meta['cause'] as string;
        }
      }
    }
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
      //TODO: handle bad requests and such here
      console.log(exception);
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
      console.log('returning DB exif');
      console.log(fromDB.exif);
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
    cloudinary.config({
      api_key: this.config.get('CLOUDINARY_API_KEY'),
      api_secret: this.config.get('CLOUDINARY_API_SECRET'),
      cloud_name: this.config.get('CLOUDINARY_CLOUD'),
    });

    try {
      const date = new Date();

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          upload_preset: this.config.get('CLOUDINARY_UPLOAD_PRESET'),
          use_filename: true,
          filename_override: file.originalname,
          folder: `${this.config.get('CLOUDINARY_FOLDER')}/${date
            .getFullYear()
            .toString()}/${(date.getMonth() + 1).toString()}`,
        },
        (error, result) => {
          if (error) {
            console.log(error);
            throw new Error(error.message);
          }

          return result;
        }
      );

      // create the stream, upload to cloudinary
      streamifier.createReadStream(file.buffer).pipe(uploadStream);

      return 'File uploaded successfully';
    } catch (error) {
      console.log(error);
    }
  }

  async updateMetadata(public_id: string) {
    return null;
  }
}
