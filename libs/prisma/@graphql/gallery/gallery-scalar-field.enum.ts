import { registerEnumType } from '@nestjs/graphql';

export enum GalleryScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    slug = "slug",
    meta = "meta",
    description = "description",
    visibility = "visibility",
    isNsfw = "isNsfw",
    image = "image"
}


registerEnumType(GalleryScalarFieldEnum, { name: 'GalleryScalarFieldEnum', description: undefined })
