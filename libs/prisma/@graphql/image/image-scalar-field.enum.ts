import { registerEnumType } from '@nestjs/graphql';

export enum ImageScalarFieldEnum {
    public_id = "public_id",
    version = "version",
    format = "format",
    url = "url",
    secureUrl = "secureUrl",
    base64 = "base64",
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
