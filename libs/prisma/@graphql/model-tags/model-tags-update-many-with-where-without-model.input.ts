import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelTagsScalarWhereInput } from './model-tags-scalar-where.input';
import { Type } from 'class-transformer';
import { ModelTagsUpdateManyMutationInput } from './model-tags-update-many-mutation.input';

@InputType()
export class ModelTagsUpdateManyWithWhereWithoutModelInput {

    @Field(() => ModelTagsScalarWhereInput, {nullable:false})
    @Type(() => ModelTagsScalarWhereInput)
    where!: ModelTagsScalarWhereInput;

    @Field(() => ModelTagsUpdateManyMutationInput, {nullable:false})
    @Type(() => ModelTagsUpdateManyMutationInput)
    data!: ModelTagsUpdateManyMutationInput;
}
