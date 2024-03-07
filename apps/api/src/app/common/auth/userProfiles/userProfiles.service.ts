import {
  DB,
  DiscordUserSetting,
  Permission,
  Role,
  UserProfile,
  withDiscord,
  withRole,
} from "@itsmillertimedev/data";
import { Injectable, Logger } from "@nestjs/common";
import { User } from "@supabase/supabase-js";
import {
  DeleteResult,
  Insertable,
  Kysely,
  Selectable,
  UpdateResult,
} from "kysely";
import { InjectKysely } from "nestjs-kysely";

@Injectable()
export class UserProfilesService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  private readonly _logger = new Logger(UserProfilesService.name);

  // Function to retrieve the user profile for the supabase ID supplied
  async getUser(
    supabaseId: string,
    includeRole?: boolean,
    includeDiscord?: boolean,
  ): Promise<
    Partial<
      Selectable<
        UserProfile & {
          role?: Selectable<Role>;
          discord?: Selectable<DiscordUserSetting>;
        }
      >
    >
  > {
    const query = this.db
      .selectFrom("UserProfile")
      .where("supabaseId", "=", supabaseId)
      .select(["email", "id", "meta", "supabaseId"])
      .$if(includeRole, (qb) =>
        qb.select((eb) => [withRole(eb, "UserProfile.roleId")]),
      )
      .$if(includeDiscord, (qb) => qb.select((eb) => [withDiscord(eb)]));

    return query.executeTakeFirst();
  }

  // Function to get all user profiles
  async getUsers(
    includeRoles?: boolean,
    includeDiscord?: boolean,
  ): Promise<
    Partial<
      Selectable<
        UserProfile & {
          role?: Selectable<Role>;
          discord?: Selectable<DiscordUserSetting>;
        }
      >
    >[]
  > {
    const query = this.db
      .selectFrom("UserProfile")
      .selectAll()
      .$if(includeRoles, (qb) =>
        qb.select((eb) => [withRole(eb, "UserProfile.roleId")]),
      )
      .$if(includeDiscord, (qb) => qb.select((eb) => [withDiscord(eb)]));

    return query.execute();
  }

  // Create a prisma user
  async createUser(user: Partial<User>): Promise<Insertable<UserProfile>> {
    const { id, email } = user;
    const meta = { email: user.email };

    const defaultRole = await this.db
      .selectFrom("Role")
      .selectAll()
      .where("Role.isDefault", "=", true)
      .executeTakeFirst();

    return this.db
      .insertInto("UserProfile")
      .values({ supabaseId: id, email, meta, roleId: defaultRole.id })
      .returningAll()
      .execute();
  }

  // Fetch a users role
  async getUserRole(supabaseId: string): Promise<UserProfile["roleId"]> {
    const data = await this.db
      .selectFrom("UserProfile")
      .selectAll()
      .where("supabaseId", "=", supabaseId)
      .executeTakeFirst();

    return data.roleId;
  }

  // Get the users permissions
  async getUsersPermissions(
    supabaseId: string,
  ): Promise<Selectable<Permission>[]> {
    const roleId = await this.getUserRole(supabaseId);

    const perms = await this.db
      .selectFrom("PermissionsToRoles")
      .where("PermissionsToRoles.roleId", "=", roleId)
      .innerJoin(
        "Permission",
        "PermissionsToRoles.permissionId",
        "Permission.id",
      )
      .select(["Permission.node", "Permission.id"])
      .execute();

    return perms;
  }

  // Delete a user profile
  async deleteUser(supabaseId: string): Promise<DeleteResult[]> {
    return this.db
      .deleteFrom("UserProfile")
      .where("supabaseId", "=", supabaseId)
      .execute();
  }

  // Update a user profile
  async updateUser(supabaseId: string, data: unknown): Promise<UpdateResult[]> {
    return this.db
      .updateTable("UserProfile")
      .where("supabaseId", "=", supabaseId)
      .set(data)
      .execute();
  }
}
