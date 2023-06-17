import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelUpdateManyMutationInput } from './model-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ModelWhereInput } from './model-where.input';

@ArgsType()
export class UpdateManyModelArgs {

    @Field(() => ModelUpdateManyMutationInput, {nullable:false})
    @Type(() => ModelUpdateManyMutationInput)
    data!: ModelUpdateManyMutationInput;

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    where?: ModelWhereInput;
}
