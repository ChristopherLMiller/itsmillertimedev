import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelCreateInput } from './model-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneModelArgs {

    @Field(() => ModelCreateInput, {nullable:false})
    @Type(() => ModelCreateInput)
    data!: ModelCreateInput;
}
