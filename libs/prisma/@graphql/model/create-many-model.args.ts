import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelCreateManyInput } from './model-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyModelArgs {

    @Field(() => [ModelCreateManyInput], {nullable:false})
    @Type(() => ModelCreateManyInput)
    data!: Array<ModelCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
