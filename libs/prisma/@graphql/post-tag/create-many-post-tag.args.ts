import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostTagCreateManyInput } from './post-tag-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPostTagArgs {

    @Field(() => [PostTagCreateManyInput], {nullable:false})
    @Type(() => PostTagCreateManyInput)
    data!: Array<PostTagCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
