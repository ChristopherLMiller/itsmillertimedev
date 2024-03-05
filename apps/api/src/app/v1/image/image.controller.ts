import { DataResponse, Image } from "@itsmillertimedev/data";
import { CacheInterceptor } from "@nestjs/cache-manager";
import {
  Controller,
  Delete,
  Get,
  Query,
  UnsupportedMediaTypeException,
  UseInterceptors,
} from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpStatusCode } from "axios";
import { DeleteResult, Selectable } from "kysely";
import { PermissionsNodes } from "../../../common/decorators/auth.decorator";
import { CloudinaryTransformInterceptor } from "../../../common/interceptors/cloudinaryTransform.interceptor";
import { ImagePermissionNodes } from "./image.permissions";
import { ImageService } from "./image.service";

@Controller({ version: "1", path: "image" })
@ApiTags("Image")
@UseInterceptors(CloudinaryTransformInterceptor, CacheInterceptor)
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Get("/")
  @ApiOperation({ summary: "Gets an Image" })
  @ApiQuery({ name: "public_id", description: "Image ID from Cloudinary" })
  @ApiResponse({ status: HttpStatusCode.Ok, description: "Success" })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: "Image not found",
  })
  async getImage(
    @Query("public_id") public_id,
  ): DataResponse<Selectable<Image>> {
    return {
      data: await this.imageService.getImage(public_id),
      meta: { public_id },
    };
  }

  @Get("exif")
  @ApiOperation({ summary: "Get an Images EXIF data" })
  @ApiQuery({ name: "public_id", description: "Image ID from Cloudinary" })
  @ApiResponse({ status: HttpStatusCode.Ok, description: "Success" })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  async getExifData(
    @Query("public_id") public_id,
  ): DataResponse<Partial<Selectable<Image>>> {
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

  @Get("thumbnail")
  @ApiOperation({ summary: "Base64 encode the provided image" })
  @ApiQuery({
    name: "public_id",
    description: "The public_id from cloudinary to encode",
  })
  @ApiResponse({ status: HttpStatusCode.Ok, description: "Success" })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  async getThumbnail(
    @Query("public_id") public_id,
  ): DataResponse<Partial<Image>> {
    return {
      data: { thumbnail: await this.imageService.getThumbnail(public_id) },
      meta: { public_id: public_id },
    };
  }

  @Delete("/")
  @PermissionsNodes(ImagePermissionNodes.DELETE_FILE)
  async deleteImage(
    @Query("public_id") public_id,
  ): DataResponse<DeleteResult[]> {
    return {
      data: await this.imageService.deleteImage(public_id),
      meta: {
        public_id,
      },
    };
  }
}
