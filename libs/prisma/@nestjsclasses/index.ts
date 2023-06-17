import { ClockifyTimer as _ClockifyTimer } from './clockify_timer';
import { DiscordUserSetting as _DiscordUserSetting } from './discord_user_setting';
import { Gallery as _Gallery } from './gallery';
import { GalleryCategory as _GalleryCategory } from './gallery_category';
import { GalleryImage as _GalleryImage } from './gallery_image';
import { GalleryTag as _GalleryTag } from './gallery_tag';
import { Manufacturer as _Manufacturer } from './manufacturer';
import { Marker as _Marker } from './marker';
import { MinecraftRule as _MinecraftRule } from './minecraft_rule';
import { MinecraftRuleCategory as _MinecraftRuleCategory } from './minecraft_rule_category';
import { Model as _Model } from './model';
import { ModelTags as _ModelTags } from './model_tags';
import { Page as _Page } from './page';
import { Post as _Post } from './post';
import { PostCategory as _PostCategory } from './post_category';
import { PostTag as _PostTag } from './post_tag';
import { Image as _Image } from './image';
import { Scale as _Scale } from './scale';
import { Session as _Session } from './session';

export namespace PrismaModel {
  export class ClockifyTimer extends _ClockifyTimer {}
  export class DiscordUserSetting extends _DiscordUserSetting {}
  export class Gallery extends _Gallery {}
  export class GalleryCategory extends _GalleryCategory {}
  export class GalleryImage extends _GalleryImage {}
  export class GalleryTag extends _GalleryTag {}
  export class Manufacturer extends _Manufacturer {}
  export class Marker extends _Marker {}
  export class MinecraftRule extends _MinecraftRule {}
  export class MinecraftRuleCategory extends _MinecraftRuleCategory {}
  export class Model extends _Model {}
  export class ModelTags extends _ModelTags {}
  export class Page extends _Page {}
  export class Post extends _Post {}
  export class PostCategory extends _PostCategory {}
  export class PostTag extends _PostTag {}
  export class Image extends _Image {}
  export class Scale extends _Scale {}
  export class Session extends _Session {}

  export const extraModels = [
    ClockifyTimer,
    DiscordUserSetting,
    Gallery,
    GalleryCategory,
    GalleryImage,
    GalleryTag,
    Manufacturer,
    Marker,
    MinecraftRule,
    MinecraftRuleCategory,
    Model,
    ModelTags,
    Page,
    Post,
    PostCategory,
    PostTag,
    Image,
    Scale,
    Session,
  ];
}
