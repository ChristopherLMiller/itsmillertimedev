import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
    id = "id",
    title = "title",
    metaTitle = "metaTitle",
    slug = "slug",
    summary = "summary",
    published = "published",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    publishedAt = "publishedAt",
    content = "content",
    imagePublic_id = "imagePublic_id",
    postCategoryId = "postCategoryId"
}


registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
