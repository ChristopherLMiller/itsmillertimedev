import { DB, Permission } from "@itsmillertimedev/data";
import { Injectable, Logger } from "@nestjs/common";
import { glob } from "glob";
import { Kysely, Selectable } from "kysely";
import { ClsService } from "nestjs-cls";
import { InjectKysely } from "nestjs-kysely";
import { readFileSync } from "node:fs";
import { SupabaseService } from "../supabase/supabase.service";
import { UserProfilesService } from "../userProfiles/userProfiles.service";

@Injectable()
export class PermissionsService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private readonly supabaseService: SupabaseService,
    private readonly userProfiles: UserProfilesService,
    private readonly asyncLocalStorage: ClsService,
  ) {}

  private readonly _logger = new Logger(PermissionsService.name);

  async updatePermissionNodes(): Promise<{
    nodes: string[];
    meta: {
      total: number;
      new: number;
    };
  }> {
    const files = await glob("**/*.permissions.{ts,js}");
    const regex = /(?<=")(.*?)(?=")/g;

    // Variable to hold all the permission Nodes
    const nodes = [];

    // Iterate through the files
    files.forEach((file) => {
      const fileContents = readFileSync(file).toString();
      const matches = fileContents.match(regex);

      // Iterate through the nodes we retrieved and append to the nodes array
      matches.forEach((match) => {
        nodes.push(match);
      });
    });

    // lets map that now, to feed it into the createMany for prisma
    const mapped = nodes.map((node) => ({
      node,
    }));

    const newItems = await this.db
      .insertInto("Permission")
      .values([...mapped])
      .returningAll()
      .onConflict((oc) => oc.column("node").doNothing())
      .execute();

    return { nodes, meta: { total: nodes.length, new: newItems.length } };
  }

  async getPermissionsNodes(): Promise<{
    nodes: Selectable<Permission>[];
    total: number;
  }> {
    const permissions = await this.db
      .selectFrom("Permission")
      .selectAll()
      .execute();

    return { nodes: permissions, total: permissions.length };
  }

  //  Compare the users permission nodes to those of an acceptable permission node array
  hasPermission(userPermissionNodes, nodesToCheck): boolean {
    if (userPermissionNodes.some((node) => nodesToCheck.includes(node.node))) {
      return true;
    }
    return false;
  }

  // Checks to see if the user is an admin user
  async isAdmin(): Promise<boolean> {
    this._logger.log("Checking permissions");
    const user = this.asyncLocalStorage.get("SUPABASE_USER");
    const apiKey = this.asyncLocalStorage.get("X_API_KEY");

    this._logger.debug({ user, apiKey });

    if (user) {
      this._logger.debug("User profile found");
      const role = await this.userProfiles.getUserRole(user.id);
      if (role === 1) {
        return true;
      }
    }

    if (apiKey) {
      this._logger.debug("API Key is present");
      return true;
    }

    return false;
  }
}
