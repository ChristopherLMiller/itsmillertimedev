import { registerEnumType } from '@nestjs/graphql';

export enum GalleryImageScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    slug = "slug",
    published = "published",
    publishedAt = "publishedAt",
    visibility = "visibility",
    url = "url"
}


registerEnumType(GalleryImageScalarFieldEnum, { name: 'GalleryImageScalarFieldEnum', description: undefined })
