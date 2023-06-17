import { registerEnumType } from '@nestjs/graphql';

export enum ScaleScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug"
}


registerEnumType(ScaleScalarFieldEnum, { name: 'ScaleScalarFieldEnum', description: undefined })
