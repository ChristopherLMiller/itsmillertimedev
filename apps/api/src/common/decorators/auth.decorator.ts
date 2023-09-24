import { SetMetadata } from '@nestjs/common';

export enum AuthLevels {
  public = 'public',
  authenticated = 'authenticated',
}

export const AuthAllowed = (level: AuthLevels) =>
  SetMetadata('authLevelAllowed', level);

export const PermissionsRequired = (...nodes: string[]) =>
  SetMetadata('auth_permission_node', nodes);

export const PermissionsPublic = () =>
  SetMetadata('auth_permission_node', ['PUBLIC']);
