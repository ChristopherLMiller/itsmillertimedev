import { registerEnumType } from '@nestjs/graphql';

export enum ManufacturerScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug"
}


registerEnumType(ManufacturerScalarFieldEnum, { name: 'ManufacturerScalarFieldEnum', description: undefined })
