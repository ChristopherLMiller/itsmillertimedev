import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelTagsUpdateManyMutationInput } from './model-tags-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ModelTagsWhereInput } from './model-tags-where.input';

@ArgsType()
export class UpdateManyModelTagsArgs {

    @Field(() => ModelTagsUpdateManyMutationInput, {nullable:false})
    @Type(() => ModelTagsUpdateManyMutationInput)
    data!: ModelTagsUpdateManyMutationInput;

    @Field(() => ModelTagsWhereInput, {nullable:true})
    @Type(() => ModelTagsWhereInput)
    where?: ModelTagsWhereInput;
}
