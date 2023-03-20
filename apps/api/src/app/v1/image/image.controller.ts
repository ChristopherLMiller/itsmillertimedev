import { DataResponse } from '@itsmillertimedev/data';
import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Query,
  UnsupportedMediaTypeException,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Image } from '@prisma/client';
import { IgnoreCloudinary } from '../../../common/decorators/IgnoreCloudinary.decorator';
import { BasicAuthGuard } from '../../../common/guards/basicAuth.guard';
import { CloudinaryTransformInterceptor } from '../../../common/interceptors/cloudinaryTransform.interceptor';
import { ResponseTransformInterceptor } from '../../../common/interceptors/responseTransform.interceptor';
import { ImageService } from './image.service';

@Controller({ version: '1', path: 'image' })
@ApiTags('Image')
@ApiSecurity('x-api-key')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor, CloudinaryTransformInterceptor)
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Get('/')
  @HttpCode(200)
  @ApiOperation({ summary: 'Gets an Image' })
  @ApiQuery({ name: 'public_id', description: 'Image ID from Cloudinary' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Image not found' })
  async getImage(@Query() query): Promise<DataResponse<Image>> {
    const { public_id } = query;
    return {
      data: await this.imageService.getImage(public_id),
      meta: { public_id },
    };
  }

  @Post('/')
  @HttpCode(200)
  @ApiOperation({ summary: 'Uploads an image to cloudinary' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @IgnoreCloudinary()
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile('file') file: Express.Multer.File
  ): Promise<DataResponse<Partial<Image>>> {
    return {
      data: await this.imageService.uploadImage(file),
      meta: {
        file: file.originalname,
      },
    };
  }

  @Get('exif')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get an Images EXIF data' })
  @ApiQuery({ name: 'public_id', description: 'Image ID from Cloudinary' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async getExifData(@Query() query): Promise<DataResponse<Partial<Image>>> {
    const { public_id } = query;
    // try and get the contents
    try {
      return {
        data: { exif: await this.imageService.getExifData(public_id) },
        meta: { public_id: public_id },
      };
    } catch (error) {
      // if we are unable to get the EXIF data for whatever reason
      throw new UnsupportedMediaTypeException(error.message);
    }
  }

  @Get('encoded')
  @HttpCode(200)
  @ApiOperation({ summary: 'Base64 encode the provided image' })
  @ApiQuery({
    name: 'public_id',
    description: 'The public_id from cloudinary to encode',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async getBase64EncodedVersion(
    @Query() query
  ): Promise<DataResponse<Partial<Image>>> {
    const { public_id } = query;
    return {
      data: {
        base64: await this.imageService.getBase64EncodedVersion(public_id),
      },
      meta: { public_id: public_id },
    };
  }

  @Get('thumbnail')
  @HttpCode(200)
  @ApiOperation({ summary: 'Base64 encode the provided image' })
  @ApiQuery({
    name: 'public_id',
    description: 'The public_id from cloudinary to encode',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async getThumbnail(@Query() query): Promise<DataResponse<Partial<Image>>> {
    const { public_id } = query;
    return {
      data: { thumbnail: await this.imageService.getThumbnail(public_id) },
      meta: { public_id: public_id },
    };
  }

  @Delete('/')
  async deleteImage(@Query() query): Promise<DataResponse<string>> {
    const { public_id } = query;

    return {
      data: await this.imageService.deleteImage(public_id),
      meta: {
        public_id,
      },
    };
  }
}
