import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateManyCategoryInput } from './post-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class PostCreateManyCategoryInputEnvelope {

    @Field(() => [PostCreateManyCategoryInput], {nullable:false})
    @Type(() => PostCreateManyCategoryInput)
    data!: Array<PostCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
