import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutFeaturedImageInput } from './post-update-without-featured-image.input';
import { PostCreateWithoutFeaturedImageInput } from './post-create-without-featured-image.input';

@InputType()
export class PostUpsertWithWhereUniqueWithoutFeaturedImageInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => PostUpdateWithoutFeaturedImageInput, {nullable:false})
    @Type(() => PostUpdateWithoutFeaturedImageInput)
    update!: PostUpdateWithoutFeaturedImageInput;

    @Field(() => PostCreateWithoutFeaturedImageInput, {nullable:false})
    @Type(() => PostCreateWithoutFeaturedImageInput)
    create!: PostCreateWithoutFeaturedImageInput;
}
