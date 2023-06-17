import { registerEnumType } from '@nestjs/graphql';

export enum PageScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug",
    summary = "summary",
    content = "content",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    imagePublic_id = "imagePublic_id",
    isPublic = "isPublic"
}


registerEnumType(PageScalarFieldEnum, { name: 'PageScalarFieldEnum', description: undefined })
