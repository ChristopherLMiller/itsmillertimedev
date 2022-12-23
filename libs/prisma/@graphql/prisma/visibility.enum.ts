import { registerEnumType } from '@nestjs/graphql';

export enum Visibility {
    PUBLIC = "PUBLIC",
    PROTECTED = "PROTECTED",
    PRIVATE = "PRIVATE"
}


registerEnumType(Visibility, { name: 'Visibility', description: undefined })
