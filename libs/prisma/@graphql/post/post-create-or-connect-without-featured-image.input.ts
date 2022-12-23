import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutFeaturedImageInput } from './post-create-without-featured-image.input';

@InputType()
export class PostCreateOrConnectWithoutFeaturedImageInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutFeaturedImageInput, {nullable:false})
    @Type(() => PostCreateWithoutFeaturedImageInput)
    create!: PostCreateWithoutFeaturedImageInput;
}
