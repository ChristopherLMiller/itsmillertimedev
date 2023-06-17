import { AdminModule } from '@adminjs/nestjs';
import * as AdminJSPrisma from '@adminjs/prisma';
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DMMFClass } from '@prisma/client/runtime';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import AdminJS from 'adminjs';
import { config } from '../../../config';
import { ClockifyAdminSettings } from '../../app/v1/clockify/admin.settings';
import { DiscordAdminSettings } from '../../app/v1/discord/admin.settings';
import {
  GalleryAdminSettings,
  GalleryCategoryAdminSettings,
  GalleryImageAdminSettings,
  GalleryTagAdminSettings,
} from '../../app/v1/gallery/admin.settings';
import { ImageAdminSettings } from '../../app/v1/image/admin.settings';
import { MapsAdminSettings } from '../../app/v1/maps/admin.settings';
import {
  MinecraftRuleAdminSettings,
  MinecraftRuleCategoryAdminSettings,
} from '../../app/v1/minecraft/admin.settings';
import { ManufacturerAdminSettings } from '../../app/v1/models/manufacturers/admin.settings';
import { ModelAdminSettings } from '../../app/v1/models/model/admin.settings';
import { ScaleAdminSettings } from '../../app/v1/models/scale/admin.settings';
import { ModelTagsAdminSettings } from '../../app/v1/models/tags/admin.settings';
import { PageAdminSettings } from '../../app/v1/page/admin.settings';
import { PostCategoryAdminSettings } from '../../app/v1/posts/post-category/admin.settings';
import { PostTagAdminSettings } from '../../app/v1/posts/post-tag/admin.settings';
import { PostAdminSettings } from '../../app/v1/posts/post/admin.settings';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

AdminJS.registerAdapter({
  Resource: AdminJSPrisma.Resource,
  Database: AdminJSPrisma.Database,
});

@Module({
  imports: [
    AdminModule.createAdminAsync({
      imports: [PrismaModule, AuthModule],
      inject: [PrismaService, AuthService],
      useFactory: async (prisma: PrismaService, authService: AuthService) => {
        const dmmf = (prisma as any)._baseDmmf as DMMFClass;

        return {
          adminJsOptions: {
            rootPath: '/admin',
            resources: [
              {
                resource: { model: dmmf.modelMap.Post, client: prisma },
                options: PostAdminSettings,
              },
              {
                resource: { model: dmmf.modelMap.PostCategory, client: prisma },
                options: PostCategoryAdminSettings,
              },
              {
                resource: { model: dmmf.modelMap.PostTag, client: prisma },
                options: PostTagAdminSettings,
              },
              {
                resource: {
                  model: dmmf.modelMap.ClockifyTimer,
                  client: prisma,
                },
                options: ClockifyAdminSettings,
              },
              {
                resource: {
                  model: dmmf.modelMap.DiscordUserSetting,
                  client: prisma,
                },
                options: DiscordAdminSettings,
              },
              {
                resource: { model: dmmf.modelMap.Gallery, client: prisma },
                options: GalleryAdminSettings,
              },
              {
                resource: {
                  model: dmmf.modelMap.GalleryCategory,
                  client: prisma,
                },
                options: GalleryCategoryAdminSettings,
              },
              {
                resource: { model: dmmf.modelMap.GalleryImage, client: prisma },
                options: GalleryImageAdminSettings,
              },
              {
                resource: { model: dmmf.modelMap.GalleryTag, client: prisma },
                options: GalleryTagAdminSettings,
              },
              {
                resource: { model: dmmf.modelMap.Marker, client: prisma },
                options: MapsAdminSettings,
              },
              {
                resource: { model: dmmf.modelMap.Image, client: prisma },
                options: ImageAdminSettings,
              },
              {
                resource: {
                  model: dmmf.modelMap.MinecraftRule,
                  client: prisma,
                },
                options: MinecraftRuleAdminSettings,
              },
              {
                resource: {
                  model: dmmf.modelMap.MinecraftRuleCategory,
                  client: prisma,
                },
                options: MinecraftRuleCategoryAdminSettings,
              },
              {
                resource: {
                  model: dmmf.modelMap.Page,
                  client: prisma,
                },
                options: PageAdminSettings,
              },
              {
                resource: {
                  model: dmmf.modelMap.Scale,
                  client: prisma,
                },
                options: ScaleAdminSettings,
              },
              {
                resource: {
                  model: dmmf.modelMap.Manufacturer,
                  client: prisma,
                },
                options: ManufacturerAdminSettings,
              },
              {
                resource: {
                  model: dmmf.modelMap.ModelTags,
                  client: prisma,
                },
                options: ModelTagsAdminSettings,
              },
              {
                resource: {
                  model: dmmf.modelMap.Model,
                  client: prisma,
                },
                options: ModelAdminSettings,
              },
            ],
          },
          auth: {
            authenticate: authService.signInEmail,
            cookieName: 'adminjs',
            cookiePassword: config.adminjs.secret,
          },
          sessionOptions: {
            store: new PrismaSessionStore(new PrismaClient(), {
              checkPeriod: 2 * 60 * 1000,
              dbRecordIdIsSessionId: true,
              dbRecordIdFunction: undefined,
            }),
            resave: true,
            saveUninitialized: true,
            secret: config.adminjs.secret,
          },
          branding: {
            companyName: 'ItsMillerTime',
          },
        };
      },
    }),
  ],
})
export class AdminJSModule {}
