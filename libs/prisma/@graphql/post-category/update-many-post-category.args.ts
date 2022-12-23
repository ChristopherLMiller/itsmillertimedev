import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCategoryUpdateManyMutationInput } from './post-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PostCategoryWhereInput } from './post-category-where.input';

@ArgsType()
export class UpdateManyPostCategoryArgs {

    @Field(() => PostCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => PostCategoryUpdateManyMutationInput)
    data!: PostCategoryUpdateManyMutationInput;

    @Field(() => PostCategoryWhereInput, {nullable:true})
    @Type(() => PostCategoryWhereInput)
    where?: PostCategoryWhereInput;
}
