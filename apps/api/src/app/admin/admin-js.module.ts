import { AdminModule } from '@adminjs/nestjs';
import * as AdminJSPrisma from '@adminjs/prisma';
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DMMFClass } from '@prisma/client/runtime';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import AdminJS from 'adminjs';
import { PrismaService } from '../../common/prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
import { SettingsAdminSettings } from '../settings/admin.settings';
import { SettingsService } from '../settings/settings.service';
import { ClockifyAdminSettings } from '../v1/clockify/admin.settings';
import { DiscordAdminSettings } from '../v1/discord/admin.settings';
import {
  GalleryAdminSettings,
  GalleryCategoryAdminSettings,
  GalleryImageAdminSettings,
  GalleryTagAdminSettings,
} from '../v1/gallery/admin.settings';
import { ImageAdminSettings } from '../v1/image/admin.settings';
import { MapsAdminSettings } from '../v1/maps/admin.settings';
import {
  MinecraftRuleAdminSettings,
  MinecraftRuleCategoryAdminSettings,
} from '../v1/minecraft/admin.settings';
import { ManufacturerAdminSettings } from '../v1/models/manufacturers/admin.settings';
import { ModelAdminSettings } from '../v1/models/model/admin.settings';
import { ScaleAdminSettings } from '../v1/models/scale/admin.settings';
import { ModelTagsAdminSettings } from '../v1/models/tags/admin.settings';
import { PageAdminSettings } from '../v1/page/admin.settings';
import { PostCategoryAdminSettings } from '../v1/posts/post-category/admin.settings';
import { PostTagAdminSettings } from '../v1/posts/post-tag/admin.settings';
import { PostAdminSettings } from '../v1/posts/post/admin.settings';

AdminJS.registerAdapter({
  Resource: AdminJSPrisma.Resource,
  Database: AdminJSPrisma.Database,
});

@Module({
  imports: [
    AdminModule.createAdminAsync({
      imports: [],
      inject: [PrismaService, AuthService, SettingsService],
      useFactory: async (
        prisma: PrismaService,
        authService: AuthService,
        settings: SettingsService
      ) => {
        const dmmf = (prisma as any)._baseDmmf as DMMFClass;
        const adminSettings = await settings.getSetting('adminjs');

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
              {
                resource: {
                  model: dmmf.modelMap.Settings,
                  client: prisma,
                },
                options: SettingsAdminSettings,
              },
              /* the following still need configured properly */
              {
                resource: {
                  model: dmmf.modelMap.User,
                  client: prisma,
                },
                options: {
                  properties: {
                    meta: {
                      isRequired: false,
                      type: 'mixed',
                    },
                  },
                },
              },
              {
                resource: {
                  model: dmmf.modelMap.Role,
                  client: prisma,
                },
              },
              {
                resource: {
                  model: dmmf.modelMap.Permission,
                  client: prisma,
                },
              },
              {
                resource: {
                  model: dmmf.modelMap.PermissionsToRoles,
                  client: prisma,
                },
              },
            ],
          },
          /*auth: {
            authenticate: authService.signInEmail['user'],
            cookieName: 'adminjs',
            cookiePassword: adminSettings['secret'],
          },*/
          sessionOptions: {
            store: new PrismaSessionStore(new PrismaClient(), {
              checkPeriod: 2 * 60 * 1000,
              dbRecordIdIsSessionId: true,
              dbRecordIdFunction: undefined,
            }),
            resave: true,
            saveUninitialized: true,
            secret: adminSettings['secret'],
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
