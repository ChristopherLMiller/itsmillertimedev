import { registerEnumType } from '@nestjs/graphql';

export enum ImageScalarFieldEnum {
    id = "id",
    public_id = "public_id",
    version = "version",
    format = "format",
    url = "url",
    secureUrl = "secureUrl",
    alt = "alt",
    caption = "caption",
    width = "width",
    height = "height",
    bytes = "bytes",
    createdAt = "createdAt",
    thumbnail = "thumbnail",
    exif = "exif",
    updatedAt = "updatedAt"
}


registerEnumType(ImageScalarFieldEnum, { name: 'ImageScalarFieldEnum', description: undefined })
