import { registerEnumType } from '@nestjs/graphql';

export enum GalleryCategoryScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug",
    galleryId = "galleryId"
}


registerEnumType(GalleryCategoryScalarFieldEnum, { name: 'GalleryCategoryScalarFieldEnum', description: undefined })
