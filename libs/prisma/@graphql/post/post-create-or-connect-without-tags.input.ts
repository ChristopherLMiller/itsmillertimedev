import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutTagsInput } from './post-create-without-tags.input';

@InputType()
export class PostCreateOrConnectWithoutTagsInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => PostCreateWithoutTagsInput, {nullable:false})
    @Type(() => PostCreateWithoutTagsInput)
    create!: PostCreateWithoutTagsInput;
}
