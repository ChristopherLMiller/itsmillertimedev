import { registerEnumType } from '@nestjs/graphql';

export enum PostTagScalarFieldEnum {
    id = "id",
    postId = "postId",
    slug = "slug",
    title = "title"
}


registerEnumType(PostTagScalarFieldEnum, { name: 'PostTagScalarFieldEnum', description: undefined })
