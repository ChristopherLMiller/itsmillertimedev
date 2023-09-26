import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateWithoutTagsInput } from './model-create-without-tags.input';
import { Type } from 'class-transformer';
import { ModelCreateOrConnectWithoutTagsInput } from './model-create-or-connect-without-tags.input';
import { ModelUpsertWithoutTagsInput } from './model-upsert-without-tags.input';
import { ModelWhereInput } from './model-where.input';
import { Prisma } from '@prisma/client';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { ModelUpdateToOneWithWhereWithoutTagsInput } from './model-update-to-one-with-where-without-tags.input';

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

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    disconnect?: ModelWhereInput;

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    delete?: ModelWhereInput;

    @Field(() => ModelWhereUniqueInput, {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    connect?: Prisma.AtLeast<ModelWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ModelUpdateToOneWithWhereWithoutTagsInput, {nullable:true})
    @Type(() => ModelUpdateToOneWithWhereWithoutTagsInput)
    update?: ModelUpdateToOneWithWhereWithoutTagsInput;
}
