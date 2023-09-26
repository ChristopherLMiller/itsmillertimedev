import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutTagsInput } from './post-update-without-tags.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutTagsInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => PostUpdateWithoutTagsInput, {nullable:false})
    @Type(() => PostUpdateWithoutTagsInput)
    data!: PostUpdateWithoutTagsInput;
}
