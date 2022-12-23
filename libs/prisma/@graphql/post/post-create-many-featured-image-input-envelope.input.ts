import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateManyFeaturedImageInput } from './post-create-many-featured-image.input';
import { Type } from 'class-transformer';

@InputType()
export class PostCreateManyFeaturedImageInputEnvelope {

    @Field(() => [PostCreateManyFeaturedImageInput], {nullable:false})
    @Type(() => PostCreateManyFeaturedImageInput)
    data!: Array<PostCreateManyFeaturedImageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
