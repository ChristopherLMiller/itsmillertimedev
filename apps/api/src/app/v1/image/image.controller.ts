import {
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UnsupportedMediaTypeException,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Image } from '@prisma/client';
import { HttpStatusCode } from 'axios';
import { IgnoreCloudinary } from '../../../common/decorators/IgnoreCloudinary.decorator';
import {
  PermissionsNodes,
  PermissionsPublic,
} from '../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../common/guards/supabaseAuth.guard';
import { CloudinaryTransformInterceptor } from '../../../common/interceptors/cloudinaryTransform.interceptor';
import { DataResponse } from '../../../lib/response';
import { ImageService } from './image.service';
import { CloudinaryPermissionNodes } from './permissions.nodes';

@Controller({ version: '1', path: 'image' })
@ApiTags('Image')
@UseGuards(supabaseAuthGuard)
@UseInterceptors(CloudinaryTransformInterceptor)
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Get('/')
  @ApiOperation({ summary: 'Gets an Image' })
  @ApiQuery({ name: 'public_id', description: 'Image ID from Cloudinary' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Image not found',
  })
  @PermissionsPublic()
  async getImage(@Query('public_id') public_id): DataResponse<Image> {
    return {
      data: await this.imageService.getImage(public_id),
      meta: { public_id },
    };
  }

  @Post('/')
  @ApiOperation({ summary: 'Uploads an image to cloudinary' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @IgnoreCloudinary()
  @UseInterceptors(FileInterceptor('file'))
  @PermissionsNodes(CloudinaryPermissionNodes.UPLOAD_FILE)
  async uploadImage(
    @UploadedFile('file') file: Express.Multer.File,
  ): DataResponse<Partial<string>> {
    return {
      data: await this.imageService.uploadImage(file),
      meta: {
        file: file.originalname,
      },
    };
  }

  @Get('exif')
  @ApiOperation({ summary: 'Get an Images EXIF data' })
  @ApiQuery({ name: 'public_id', description: 'Image ID from Cloudinary' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @PermissionsPublic()
  async getExifData(
    @Query('public_id') public_id,
  ): DataResponse<Partial<Image>> {
    // try and get the contents
    try {
      const data = await this.imageService.getExifData(public_id);
      return {
        data: { exif: data.exif },
        meta: { public_id: data.public_id, data: data.id },
      };
    } catch (error) {
      // if we are unable to get the EXIF data for whatever reason
      throw new UnsupportedMediaTypeException(error.message);
    }
  }

  @Get('thumbnail')
  @ApiOperation({ summary: 'Base64 encode the provided image' })
  @ApiQuery({
    name: 'public_id',
    description: 'The public_id from cloudinary to encode',
  })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @PermissionsPublic()
  async getThumbnail(
    @Query('public_id') public_id,
  ): DataResponse<Partial<Image>> {
    return {
      data: { thumbnail: await this.imageService.getThumbnail(public_id) },
      meta: { public_id: public_id },
    };
  }

  @Delete('/')
  @PermissionsNodes(CloudinaryPermissionNodes.DELETE_FILE)
  async deleteImage(@Query('public_id') public_id): DataResponse<string> {
    return {
      data: await this.imageService.deleteImage(public_id),
      meta: {
        public_id,
      },
    };
  }
}
