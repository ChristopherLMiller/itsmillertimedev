import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { PermissionsService } from "../../app/common/auth/permissions/permissions.service";
import { SupabaseService } from "../../app/common/auth/supabase/supabase.service";
import { UserProfilesService } from "../../app/common/auth/userProfiles/userProfiles.service";

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(
    private supabaseService: SupabaseService,
    private userProfileService: UserProfilesService,
    private reflector: Reflector,
    private permissionsService: PermissionsService,
  ) {}

  private readonly _logger = new Logger(SupabaseAuthGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const handler = context.getHandler();

    const permissionNodes = this.reflector.get<string[]>(
      "auth_permission_node",
      handler,
    );

    // We flow through the following to determine if the user is able to access the resource or not

    // Verify we received any nodes at all, if we didn't then assume that its a public resource
    if (permissionNodes === undefined || permissionNodes.length === 0) {
      return true;
    } else {
      // Get the logged in user from the request
      const user = await this.supabaseService.getUserFromRequest();

      // If the users roles is 'authenticated', that means they were logged into supabase successfully
      if (user.role === "authenticated") {
        // Fetch the users permissions nodes applicable to them.
        const usersPermissionsNodes =
          await this.userProfileService.getUsersPermissions(user.id);

        // Check if they have permission to do so or not
        return this.permissionsService.hasPermission(
          usersPermissionsNodes,
          permissionNodes,
        );
      }
    }

    return false;
  }
}
