import { registerEnumType } from '@nestjs/graphql';

export enum GalleryTagScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug",
    galleryId = "galleryId"
}


registerEnumType(GalleryTagScalarFieldEnum, { name: 'GalleryTagScalarFieldEnum', description: undefined })
