import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  Query,
  UnsupportedMediaTypeException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import * as Yup from 'yup';
import { BasicAuthGuard } from '../../../guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../interceptors/responseTransform.interceptor';
import { ImagesService } from './images.service';

@Controller({ version: '1', path: 'images' })
@ApiTags('Images')
@ApiSecurity('x-api-key')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor)
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Get('exif')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get an Images EXIF data' })
  @ApiQuery({ name: 'url', description: 'Image url' })
  @ApiQuery({ name: 'cache', description: 'Whether to cache the image' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 415, description: 'Unsupported Media Type' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async getExifData(@Query() query): Promise<any> {
    const { url, cache } = query;

    const ImageValidationScema = Yup.string()
      .url()
      .required('Must provide URL to image');

    // Validatet he url
    if (!ImageValidationScema.validateSync(url)) {
      throw new BadRequestException('Image url is required');
    }
    // try and get the contents
    try {
      if (url) {
        const { data, meta } = await this.imagesService.getExifData(url, cache);
        return { data, meta };
      }
    } catch (error) {
      // if we are unable to get the EXIF data for whatever reason
      throw new UnsupportedMediaTypeException(error.message);
    }
  }
}
