import { registerEnumType } from '@nestjs/graphql';

export enum PostCategoryScalarFieldEnum {
    id = "id",
    slug = "slug",
    title = "title"
}


registerEnumType(PostCategoryScalarFieldEnum, { name: 'PostCategoryScalarFieldEnum', description: undefined })
