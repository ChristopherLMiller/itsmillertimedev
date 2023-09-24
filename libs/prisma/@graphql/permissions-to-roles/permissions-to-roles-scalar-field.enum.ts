import { registerEnumType } from '@nestjs/graphql';

export enum PermissionsToRolesScalarFieldEnum {
    roleId = "roleId",
    permissionId = "permissionId"
}


registerEnumType(PermissionsToRolesScalarFieldEnum, { name: 'PermissionsToRolesScalarFieldEnum', description: undefined })
