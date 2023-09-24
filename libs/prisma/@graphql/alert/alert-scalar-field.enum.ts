import { registerEnumType } from '@nestjs/graphql';

export enum AlertScalarFieldEnum {
    id = "id",
    title = "title",
    active = "active",
    validUntil = "validUntil",
    startDate = "startDate",
    AlertAttempts = "AlertAttempts"
}


registerEnumType(AlertScalarFieldEnum, { name: 'AlertScalarFieldEnum', description: undefined })
