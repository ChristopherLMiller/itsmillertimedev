import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelWhereInput } from './model-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyModelArgs {

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    where?: ModelWhereInput;
}
