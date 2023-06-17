import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateWithoutImagesInput } from './model-create-without-images.input';
import { Type } from 'class-transformer';
import { ModelCreateOrConnectWithoutImagesInput } from './model-create-or-connect-without-images.input';
import { ModelUpsertWithoutImagesInput } from './model-upsert-without-images.input';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { ModelUpdateWithoutImagesInput } from './model-update-without-images.input';

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

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ModelWhereUniqueInput, {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    connect?: ModelWhereUniqueInput;

    @Field(() => ModelUpdateWithoutImagesInput, {nullable:true})
    @Type(() => ModelUpdateWithoutImagesInput)
    update?: ModelUpdateWithoutImagesInput;
}
