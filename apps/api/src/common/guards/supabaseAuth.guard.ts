import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../../app/common/auth/auth.service';

@Injectable()
export class supabaseAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private reflector: Reflector,
  ) {}

  logger = new Logger(supabaseAuthGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const handler = context.getHandler();
    const request = context.switchToHttp().getRequest();

    const permissionNodes = this.reflector.get<string[]>(
      'auth_permission_node',
      handler,
    );

    // We flow through the following to determine if the user is able to access the resource or not

    // Verify we received any nodes at all
    if (permissionNodes && permissionNodes.length > 0) {
      // Check for public access, eject if so returning true
      if (permissionNodes[0] === 'PUBLIC') {
        return true;
      }

      // Extract the JWT
      const jwt = request.headers?.authorization as string | null;

      if (jwt) {
        const { data, error } = await this.authService.getUser(
          jwt.split(' ')[1],
        );

        // Verify we got a user
        if (!error) {
          if (data.user.role === 'authenticated') {
            // User was authenticated successfully, now lets get their role and all the permission nodes they have
            // this is whats used to compare and verify if they have permission or not

            const user = await this.authService.getUserPermissions(
              data.user.id,
            );
            return true;
          }
        } else {
          if (error.status === 401) {
            throw new UnauthorizedException(
              `${error.status}: ${error.message}`,
            );
          } else {
            throw new BadRequestException(`${error.status}: ${error.message}`);
          }
        }
      } else {
        throw new UnauthorizedException(
          'Must be authenticated to access this endpoint',
        );
      }
    }

    return false;
  }
}
