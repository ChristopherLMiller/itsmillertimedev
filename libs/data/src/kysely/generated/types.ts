import type { ColumnType } from "kysely";
export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { PublicationStatus, Visibility } from "./enums";

export type Alert = {
  id: Generated<number>;
  title: string;
  active: boolean;
  validUntil: Timestamp;
  startDate: Timestamp;
  AlertAttempts: Generated<number>;
};
export type ClockifyTimer = {
  projectId: string;
  startTime: string;
  id: Generated<number>;
};
export type DiscordUserSetting = {
  userId: string;
  meta: unknown;
};
export type Gallery = {
  id: Generated<number>;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  title: string;
  slug: string;
  meta: string;
  description: string;
  visibility: Generated<Visibility>;
  isNsfw: Generated<boolean>;
  image: string;
};
export type GalleryCategory = {
  id: Generated<number>;
  title: string;
  slug: string;
  galleryId: number | null;
};
export type GalleryImage = {
  id: Generated<number>;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  title: string;
  slug: string;
  published: PublicationStatus;
  publishedAt: Timestamp;
  visibility: Visibility | null;
  url: string;
};
export type GalleryTag = {
  id: Generated<number>;
  title: string;
  slug: string;
  galleryId: number | null;
};
export type GalleryToGalleryImage = {
  A: number;
  B: number;
};
export type Image = {
  id: Generated<number>;
  public_id: string;
  version: number | null;
  format: string | null;
  url: string | null;
  secureUrl: string | null;
  alt: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  bytes: number | null;
  createdAt: Generated<Timestamp>;
  thumbnail: string | null;
  exif: unknown | null;
  updatedAt: Timestamp;
  modelId: number | null;
};
export type Manufacturer = {
  id: Generated<number>;
  title: string;
  slug: string;
};
export type Marker = {
  id: Generated<number>;
  lat: string;
  lon: string;
  siteURL: string | null;
  galleryURL: string | null;
  title: string;
  rating: Generated<number>;
  visited: Generated<boolean>;
  visits: Generated<number>;
};
export type MinecraftRule = {
  id: Generated<number>;
  name: string;
  description: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  categoryId: number;
};
export type MinecraftRuleCategory = {
  id: Generated<number>;
  name: string;
  icon: string;
};
export type Model = {
  id: Generated<number>;
  title: string;
  slug: string;
  completed: Generated<boolean>;
  visibility: Visibility;
  metaTitle: string;
  summary: string;
  featuredImage: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  clockifyProjectId: string | null;
  contents: string;
  yearReleased: number;
  completedAt: Timestamp;
  imagePublic_id: string;
  manufacturerId: number;
  scaleId: number;
};
export type ModelTags = {
  id: Generated<number>;
  slug: string;
  title: string;
  modelId: number | null;
};
export type Page = {
  id: Generated<number>;
  title: string;
  slug: string;
  summary: string;
  content: string | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  imagePublic_id: string | null;
  isPublic: boolean;
};
export type Permission = {
  id: Generated<number>;
  node: string;
};
export type PermissionsToRoles = {
  roleId: number;
  permissionId: number;
};
export type Post = {
  id: Generated<number>;
  title: string;
  metaTitle: string;
  slug: string;
  summary: string;
  wordCount: Generated<number>;
  published: boolean;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  publishedAt: Timestamp | null;
  content: string;
  imagePublic_id: string | null;
  postCategoryId: number;
};
export type PostCategory = {
  id: Generated<number>;
  slug: string;
  title: string;
};
export type Role = {
  id: Generated<number>;
  name: string;
  isDefault: Generated<boolean>;
};
export type Scale = {
  id: Generated<number>;
  title: string;
  slug: string;
};
export type Session = {
  id: string;
  sid: string;
  data: string;
  expiresAt: Timestamp;
};
export type Settings = {
  id: Generated<number>;
  key: string;
  value: unknown;
};
export type UserProfile = {
  id: Generated<number>;
  supabaseId: string;
  email: string;
  roleId: number;
  meta: unknown | null;
  discordUserSettingUserId: string | null;
};
export type DB = {
  _GalleryToGalleryImage: GalleryToGalleryImage;
  Alert: Alert;
  ClockifyTimer: ClockifyTimer;
  DiscordUserSetting: DiscordUserSetting;
  Gallery: Gallery;
  GalleryCategory: GalleryCategory;
  GalleryImage: GalleryImage;
  GalleryTag: GalleryTag;
  Image: Image;
  Manufacturer: Manufacturer;
  Marker: Marker;
  MinecraftRule: MinecraftRule;
  MinecraftRuleCategory: MinecraftRuleCategory;
  Model: Model;
  ModelTags: ModelTags;
  Page: Page;
  Permission: Permission;
  PermissionsToRoles: PermissionsToRoles;
  Post: Post;
  PostCategory: PostCategory;
  Role: Role;
  Scale: Scale;
  Session: Session;
  Settings: Settings;
  UserProfile: UserProfile;
};
