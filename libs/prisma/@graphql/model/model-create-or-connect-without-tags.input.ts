import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';
import { ModelCreateWithoutTagsInput } from './model-create-without-tags.input';

@InputType()
export class ModelCreateOrConnectWithoutTagsInput {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: ModelWhereUniqueInput;

    @Field(() => ModelCreateWithoutTagsInput, {nullable:false})
    @Type(() => ModelCreateWithoutTagsInput)
    create!: ModelCreateWithoutTagsInput;
}
