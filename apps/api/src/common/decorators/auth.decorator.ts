import { SetMetadata } from '@nestjs/common';

export enum AuthLevels {
  public = 'public',
  authenticated = 'authenticated',
}

export const AuthAllowed = (level: AuthLevels) =>
  SetMetadata('authLevelAllowed', level);

export const PermissionsNodes = (...nodes: string[]) =>
  SetMetadata('auth_permission_node', nodes);
