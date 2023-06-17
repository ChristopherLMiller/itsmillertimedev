import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelScalarWhereInput } from './model-scalar-where.input';
import { Type } from 'class-transformer';
import { ModelUpdateManyMutationInput } from './model-update-many-mutation.input';

@InputType()
export class ModelUpdateManyWithWhereWithoutScaleInput {

    @Field(() => ModelScalarWhereInput, {nullable:false})
    @Type(() => ModelScalarWhereInput)
    where!: ModelScalarWhereInput;

    @Field(() => ModelUpdateManyMutationInput, {nullable:false})
    @Type(() => ModelUpdateManyMutationInput)
    data!: ModelUpdateManyMutationInput;
}
