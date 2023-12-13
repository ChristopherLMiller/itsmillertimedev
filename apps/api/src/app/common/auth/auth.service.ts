import { Injectable, Logger } from "@nestjs/common";
import { PermissionsToRoles, Role } from "@prisma/client";
import { UserResponse, createClient } from "@supabase/supabase-js";
import { PrismaService } from "../prisma/prisma.service";
import { SettingsService } from "../settings/settings.service";
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private settings: SettingsService,
  ) {
    this.loadSettings().then((settings) => {
      this.defaultGroup = settings.defaultGroup;
      this._logger.log(`Settings loaded successfully`);
    });
  }

  // Local Variables
  private readonly _logger = new Logger(AuthService.name);
  private _supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
  );
  private defaultGroup = null;

  // Settings loader
  async loadSettings() {
    try {
      const defaultGroup = await this.settings.getFieldValue<number>(
        "auth",
        "default-group",
      );
      return { defaultGroup };
    } catch (error) {
      this._logger.error(error);
      throw error;
    }
  }

  async getUser(token: string): Promise<UserResponse> {
    return this._supabase.auth.getUser(token);
  }

  async isLoggedIn(token: string): Promise<boolean> {
    if (!token) {
      return false;
    }

    const { error, data } = await this.getUser(this.getJWT(token));
    if (error) {
      throw new Error(error.message);
    } else {
      return data.user.role === "authenticated";
    }
  }

  getJWT(token: string): string | null {
    return token.split(" ")[1] || null;
  }

  async getUserRole(userId: string): Promise<Partial<Role>> {
    const user = await this.prisma.user.findUnique({
      where: { supabaseId: userId },
      select: {
        role: true,
      },
    });

    return user.role;
  }

  async getRolePermissions(roleId: number): Promise<PermissionsToRoles[]> {
    return this.prisma.permissionsToRoles.findMany({
      where: { roleId },
      include: {
        Permission: true,
      },
    });
  }

  async getUserPermissions(userId: string): Promise<PermissionsToRoles[]> {
    const userRole = await this.getUserRole(userId);
    return this.getRolePermissions(userRole.id);
  }
}
