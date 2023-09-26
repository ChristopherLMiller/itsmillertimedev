import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCategoryInput } from './post-create-without-category.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutCategoryInput } from './post-create-or-connect-without-category.input';
import { PostCreateManyCategoryInputEnvelope } from './post-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedManyWithoutCategoryInput {

    @Field(() => [PostCreateWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoryInput)
    create?: Array<PostCreateWithoutCategoryInput>;

    @Field(() => [PostCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoryInput>;

    @Field(() => PostCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyCategoryInputEnvelope)
    createMany?: PostCreateManyCategoryInputEnvelope;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>>;
}
