import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateWithoutTagsInput } from './model-create-without-tags.input';
import { Type } from 'class-transformer';
import { ModelCreateOrConnectWithoutTagsInput } from './model-create-or-connect-without-tags.input';
import { ModelUpsertWithoutTagsInput } from './model-upsert-without-tags.input';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { ModelUpdateWithoutTagsInput } from './model-update-without-tags.input';

@InputType()
export class ModelUpdateOneWithoutTagsNestedInput {

    @Field(() => ModelCreateWithoutTagsInput, {nullable:true})
    @Type(() => ModelCreateWithoutTagsInput)
    create?: ModelCreateWithoutTagsInput;

    @Field(() => ModelCreateOrConnectWithoutTagsInput, {nullable:true})
    @Type(() => ModelCreateOrConnectWithoutTagsInput)
    connectOrCreate?: ModelCreateOrConnectWithoutTagsInput;

    @Field(() => ModelUpsertWithoutTagsInput, {nullable:true})
    @Type(() => ModelUpsertWithoutTagsInput)
    upsert?: ModelUpsertWithoutTagsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ModelWhereUniqueInput, {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    connect?: ModelWhereUniqueInput;

    @Field(() => ModelUpdateWithoutTagsInput, {nullable:true})
    @Type(() => ModelUpdateWithoutTagsInput)
    update?: ModelUpdateWithoutTagsInput;
}
