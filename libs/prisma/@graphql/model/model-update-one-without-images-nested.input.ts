import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateWithoutImagesInput } from './model-create-without-images.input';
import { Type } from 'class-transformer';
import { ModelCreateOrConnectWithoutImagesInput } from './model-create-or-connect-without-images.input';
import { ModelUpsertWithoutImagesInput } from './model-upsert-without-images.input';
import { ModelWhereInput } from './model-where.input';
import { Prisma } from '@prisma/client';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { ModelUpdateToOneWithWhereWithoutImagesInput } from './model-update-to-one-with-where-without-images.input';

@InputType()
export class ModelUpdateOneWithoutImagesNestedInput {

    @Field(() => ModelCreateWithoutImagesInput, {nullable:true})
    @Type(() => ModelCreateWithoutImagesInput)
    create?: ModelCreateWithoutImagesInput;

    @Field(() => ModelCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ModelCreateOrConnectWithoutImagesInput)
    connectOrCreate?: ModelCreateOrConnectWithoutImagesInput;

    @Field(() => ModelUpsertWithoutImagesInput, {nullable:true})
    @Type(() => ModelUpsertWithoutImagesInput)
    upsert?: ModelUpsertWithoutImagesInput;

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    disconnect?: ModelWhereInput;

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    delete?: ModelWhereInput;

    @Field(() => ModelWhereUniqueInput, {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    connect?: Prisma.AtLeast<ModelWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ModelUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => ModelUpdateToOneWithWhereWithoutImagesInput)
    update?: ModelUpdateToOneWithWhereWithoutImagesInput;
}
