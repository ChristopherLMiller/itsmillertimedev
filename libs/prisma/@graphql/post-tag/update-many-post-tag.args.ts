import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostTagUpdateManyMutationInput } from './post-tag-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PostTagWhereInput } from './post-tag-where.input';

@ArgsType()
export class UpdateManyPostTagArgs {

    @Field(() => PostTagUpdateManyMutationInput, {nullable:false})
    @Type(() => PostTagUpdateManyMutationInput)
    data!: PostTagUpdateManyMutationInput;

    @Field(() => PostTagWhereInput, {nullable:true})
    @Type(() => PostTagWhereInput)
    where?: PostTagWhereInput;
}
