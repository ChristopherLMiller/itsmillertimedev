import { ClockifyTimer as _ClockifyTimer } from './clockify_timer';
import { DiscordUserSetting as _DiscordUserSetting } from './discord_user_setting';
import { Gallery as _Gallery } from './gallery';
import { GalleryCategory as _GalleryCategory } from './gallery_category';
import { GalleryImage as _GalleryImage } from './gallery_image';
import { GalleryTag as _GalleryTag } from './gallery_tag';
import { Marker as _Marker } from './marker';
import { MinecraftRule as _MinecraftRule } from './minecraft_rule';
import { MinecraftRuleCategory as _MinecraftRuleCategory } from './minecraft_rule_category';
import { Post as _Post } from './post';
import { PostCategory as _PostCategory } from './post_category';
import { PostTag as _PostTag } from './post_tag';
import { Image as _Image } from './image';
import { Session as _Session } from './session';

export namespace PrismaModel {
  export class ClockifyTimer extends _ClockifyTimer {}
  export class DiscordUserSetting extends _DiscordUserSetting {}
  export class Gallery extends _Gallery {}
  export class GalleryCategory extends _GalleryCategory {}
  export class GalleryImage extends _GalleryImage {}
  export class GalleryTag extends _GalleryTag {}
  export class Marker extends _Marker {}
  export class MinecraftRule extends _MinecraftRule {}
  export class MinecraftRuleCategory extends _MinecraftRuleCategory {}
  export class Post extends _Post {}
  export class PostCategory extends _PostCategory {}
  export class PostTag extends _PostTag {}
  export class Image extends _Image {}
  export class Session extends _Session {}

  export const extraModels = [
    ClockifyTimer,
    DiscordUserSetting,
    Gallery,
    GalleryCategory,
    GalleryImage,
    GalleryTag,
    Marker,
    MinecraftRule,
    MinecraftRuleCategory,
    Post,
    PostCategory,
    PostTag,
    Image,
    Session,
  ];
}
