import { AdminModule } from '@adminjs/nestjs';
import * as AdminJSPrisma from '@adminjs/prisma';
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DMMFClass } from '@prisma/client/runtime';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import AdminJS from 'adminjs';
import { config } from '../../../config';
import { PostCategoryAdminSettings } from '../../app/v1/posts/post-category/settings';
import { PostTagAdminSettings } from '../../app/v1/posts/post-tag/settings';
import { PostModule } from '../../app/v1/posts/post/post.module';
import { PostService } from '../../app/v1/posts/post/post.service';
import { PostAdminSettings } from '../../app/v1/posts/post/settings';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

AdminJS.registerAdapter({
  Resource: AdminJSPrisma.Resource,
  Database: AdminJSPrisma.Database,
});

const authenticate = async (email: string, password: string) => {
  if (email === config.adminjs.email && password === config.adminjs.password) {
    return Promise.resolve({ email, password });
  }
  return null;
};

@Module({
  imports: [
    AdminModule.createAdminAsync({
      imports: [PrismaModule, PostModule],
      inject: [PrismaService, PostService],
      useFactory: async (prisma: PrismaService) => {
        const dmmf = (prisma as any)._baseDmmf as DMMFClass;

        const MinecraftNavigation = {
          name: 'Minecraft',
          icon: 'GameConsole',
        };

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
                resource: { model: dmmf.modelMap.Image, client: prisma },
                options: {
                  properties: {
                    base64: {
                      isVisible: {
                        edit: false,
                        show: false,
                        list: false,
                        filter: false,
                      },
                    },
                    thumbnail: {
                      isVisible: {
                        edit: false,
                        show: false,
                        list: false,
                        filter: false,
                      },
                    },
                  },
                },
              },
              {
                resource: {
                  model: dmmf.modelMap.ClockifyTimer,
                  client: prisma,
                },
                options: {},
              },
              {
                resource: {
                  model: dmmf.modelMap.DiscordUserSetting,
                  client: prisma,
                },
                options: {},
              },
              {
                resource: { model: dmmf.modelMap.Gallery, client: prisma },
                options: {},
              },
              {
                resource: {
                  model: dmmf.modelMap.GalleryCategory,
                  client: prisma,
                },
                options: {},
              },
              {
                resource: { model: dmmf.modelMap.GalleryImage, client: prisma },
                options: {},
              },
              {
                resource: { model: dmmf.modelMap.GalleryTag, client: prisma },
                options: {},
              },
              {
                resource: { model: dmmf.modelMap.Marker, client: prisma },
                options: {},
              },
              {
                resource: {
                  model: dmmf.modelMap.MinecraftRule,
                  client: prisma,
                },
                options: {
                  navigation: MinecraftNavigation,
                },
              },
              {
                resource: {
                  model: dmmf.modelMap.MinecraftRuleCategory,
                  client: prisma,
                },
                options: {
                  navigation: MinecraftNavigation,
                },
              },
            ],
          },
          auth: {
            authenticate,
            cookieName: 'adminjs',
            cookiePassword: 'secret',
          },
          sessionOptions: {
            store: new PrismaSessionStore(new PrismaClient(), {
              checkPeriod: 2 * 60 * 1000,
              dbRecordIdIsSessionId: true,
              dbRecordIdFunction: undefined,
            }),
            resave: true,
            saveUninitialized: true,
            secret: 'secret',
          },
        };
      },
    }),
  ],
})
export class AdminJSModule {}
