import { Injectable, Logger } from '@nestjs/common';
import { PermissionsToRoles, Role } from '@prisma/client';
import { Session, UserResponse, createClient } from '@supabase/supabase-js';
import { config } from '../../../config';
import { PrismaService } from '../../common/prisma/prisma.service';
import { SettingsService } from '../settings/settings.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly settings: SettingsService
  ) {}

  logger = new Logger(AuthService.name);
  supabase = createClient(config.supabase.url, config.supabase.key);

  signInEmail = async (
    email: string,
    password: string
  ): Promise<Session | null> => {
    const { error, data } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      // Attempt to fetch the user from the DB
      const userData = await this.prisma.user.findUnique({
        where: { supabaseId: data.user.id },
      });

      // Checkif the user was null or not, if so insert them into the users table
      if (userData === null) {
        const result = await this.prisma.user.create({
          data: {
            supabaseId: data.user.id,
            email: data.user.email,
            roleId: await this.settings.getField<number>(
              'auth',
              'default_group'
            ),
          },
        });
        console.log(result);
      }

      // lastly return the session
      return data.session;
    } else {
      this.logger.error(error.message);
      throw new Error(error.message);
    }
  };

  getUser = async (token: string): Promise<UserResponse> => {
    return this.supabase.auth.getUser(token);
  };

  isLoggedIn = async (token: string): Promise<boolean> => {
    if (!token) {
      return false;
    }

    const { error, data } = await this.getUser(this.getJWT(token));
    if (error) {
      throw new Error(error.message);
    } else {
      return data.user.role === 'authenticated';
    }
  };

  getJWT = (token: string): string | null => {
    return token.split(' ')[1] || null;
  };

  getUserRole = async (userId: string): Promise<Partial<Role>> => {
    const user = await this.prisma.user.findUnique({
      where: { supabaseId: userId },
      select: {
        role: true,
      },
    });

    return user.role;
  };

  getRolePermissions = async (
    roleId: number
  ): Promise<PermissionsToRoles[]> => {
    return this.prisma.permissionsToRoles.findMany({
      where: { roleId },
      include: {
        Permission: true,
      },
    });
  };

  getUserPermissions = async (
    userId: string
  ): Promise<PermissionsToRoles[]> => {
    const userRole = await this.getUserRole(userId);
    return this.getRolePermissions(userRole.roleId);
  };
}
