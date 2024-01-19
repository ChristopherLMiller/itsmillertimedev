import { Injectable, Logger } from "@nestjs/common";
import { Role, UserProfile } from "@prisma/client";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class UserProfilesService {
  constructor(private prisma: PrismaService) {}

  private readonly _logger = new Logger(UserProfilesService.name);

  private readonly permissionsIncludeStatement = {
    role: { include: { permissions: { include: { permission: true } } } },
  };
  private readonly discordIncludeStatement = {
    discord: true,
  };

  // Function to retrieve the user profile for the supabase ID supplied
  async getUser(
    supabaseId: string,
    includePermissions?: boolean,
    includeDiscord?: boolean,
  ): Promise<UserProfile> {
    const permissionsInclude = includePermissions
      ? this.permissionsIncludeStatement
      : undefined;
    const discordInclude = includeDiscord
      ? this.discordIncludeStatement
      : undefined;

    const data = await this.prisma.userProfile.findUnique({
      where: { supabaseId },
      include: { ...permissionsInclude, ...discordInclude },
    });
    return data;
  }

  // Function to get all user profiles
  async getUsers(
    includePermissions?: boolean,
    includeDiscord?: boolean,
  ): Promise<UserProfile[]> {
    const permissionsInclude = includePermissions
      ? this.permissionsIncludeStatement
      : undefined;
    const discordInclude = includeDiscord
      ? this.discordIncludeStatement
      : undefined;

    return this.prisma.userProfile.findMany({
      include: { ...permissionsInclude, ...discordInclude },
    });
  }

  // Create a prisma user
  async createUser(record: Partial<UserProfile>): Promise<UserProfile> {
    const { supabaseId, email } = record;
    const meta = { email: record.email };

    const result = await this.prisma.userProfile.create({
      data: {
        supabaseId,
        email,
        roleId: 2,
        meta,
      },
    });
    return result;
  }

  // Fetch a users role
  async getUserRole(id: string): Promise<Role> {
    const userData = await this.prisma.userProfile.findUnique({
      where: { supabaseId: id },
      include: { role: true },
    });
    return userData.role;
  }

  // Get the users permissions
  async getUsersPermissions(id: string): Promise<Array<string>> {
    const userData = await this.prisma.userProfile.findUnique({
      where: { supabaseId: id },
      include: this.permissionsIncludeStatement,
    });

    const permissions = userData.role.permissions;
    const nodes = permissions.map((node) => node.permission.node);
    return nodes;
  }

  // Delete a prisma user
  async deleteUser(id: string): Promise<UserProfile> {
    return await this.prisma.userProfile.delete({ where: { supabaseId: id } });
  }

  // Update a prisma user
  async updateUser(id: string, data: UserProfile): Promise<UserProfile> {
    return await this.prisma.userProfile.update({
      where: { supabaseId: id },
      data,
    });
  }
}
