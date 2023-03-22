import { registerEnumType } from '@nestjs/graphql';

export enum SessionScalarFieldEnum {
    id = "id",
    sid = "sid",
    data = "data",
    expiresAt = "expiresAt"
}


registerEnumType(SessionScalarFieldEnum, { name: 'SessionScalarFieldEnum', description: undefined })
