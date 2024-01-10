import { DataResponse } from "@itsmillertimedev/data";
import { Body, Controller, Logger, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DiscordService } from "../discord/discord.service";
import { ImageService } from "../image/image.service";

@Controller({ version: "1", path: "webhooks" })
@ApiTags("webhooks")
export class WebhooksController {
  constructor(
    private discord: DiscordService,
    private image: ImageService,
  ) {}

  logger = new Logger(WebhooksController.name);

  //#region Cloudinary
  @Post("cloudinary/notify")
  async webhookCloudinaryNotify(@Body() body: any): DataResponse<unknown> {
    // the type of notication means we need to call different services, handle appropriately
    switch (body.notification_type) {
      case "upload": {
        // Resource was uploaded
        if (await this.image.createImage(body)) {
          this.discord.sendDiscordMessage(
            `Created new Cloudinary resource, public_id: ${body.public_id}`,
            "spam_channel",
          );
          return {
            data: {
              message: "Image created successfully",
            },
            meta: {
              public_id: body.public_id,
            },
          };
        }
        break;
      }
      case "delete": {
        // Resource was deleted
        if (await this.image.deleteImage(body.resources.public_id)) {
          this.discord.sendDiscordMessage(
            `Deleted Cloudinary resource, public_id: ${body.resources.public_id}`,
            "spam channel",
          );
          return {
            data: {
              message: "Resource was successfully deleted",
            },
            meta: {
              public_id: body.resources.public_id,
            },
          };
        }
        break;
      }
      case "resource_context_changed":
        // Resource meta was updated
        // Todo
        if (await this.image.updateMetadata("public_id")) {
          this.discord.sendDiscordMessage(
            `Updated Cloudinary resource, public_id: ${body.resources.public_id}`,
            "spam_channel",
          );
          return {
            data: {
              message: "Resource meta updated successfully",
            },
            meta: {
              public_id: "public_id",
            },
          };
        }
        break;
      default:
        this.logger.log(body.notification_type);
        break;
    }
  }
  //#endregion
}
