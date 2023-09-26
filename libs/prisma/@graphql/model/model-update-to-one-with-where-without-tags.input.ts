import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelWhereInput } from './model-where.input';
import { Type } from 'class-transformer';
import { ModelUpdateWithoutTagsInput } from './model-update-without-tags.input';

@InputType()
export class ModelUpdateToOneWithWhereWithoutTagsInput {

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    where?: ModelWhereInput;

    @Field(() => ModelUpdateWithoutTagsInput, {nullable:false})
    @Type(() => ModelUpdateWithoutTagsInput)
    data!: ModelUpdateWithoutTagsInput;
}
