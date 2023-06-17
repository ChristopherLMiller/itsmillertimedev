import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateWithoutTagsInput } from './model-create-without-tags.input';
import { Type } from 'class-transformer';
import { ModelCreateOrConnectWithoutTagsInput } from './model-create-or-connect-without-tags.input';
import { ModelWhereUniqueInput } from './model-where-unique.input';

@InputType()
export class ModelCreateNestedOneWithoutTagsInput {

    @Field(() => ModelCreateWithoutTagsInput, {nullable:true})
    @Type(() => ModelCreateWithoutTagsInput)
    create?: ModelCreateWithoutTagsInput;

    @Field(() => ModelCreateOrConnectWithoutTagsInput, {nullable:true})
    @Type(() => ModelCreateOrConnectWithoutTagsInput)
    connectOrCreate?: ModelCreateOrConnectWithoutTagsInput;

    @Field(() => ModelWhereUniqueInput, {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    connect?: ModelWhereUniqueInput;
}
