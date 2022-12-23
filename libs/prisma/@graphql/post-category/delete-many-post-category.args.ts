import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCategoryWhereInput } from './post-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPostCategoryArgs {

    @Field(() => PostCategoryWhereInput, {nullable:true})
    @Type(() => PostCategoryWhereInput)
    where?: PostCategoryWhereInput;
}
