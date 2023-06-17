import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateWithoutImagesInput } from './model-create-without-images.input';
import { Type } from 'class-transformer';
import { ModelCreateOrConnectWithoutImagesInput } from './model-create-or-connect-without-images.input';
import { ModelWhereUniqueInput } from './model-where-unique.input';

@InputType()
export class ModelCreateNestedOneWithoutImagesInput {

    @Field(() => ModelCreateWithoutImagesInput, {nullable:true})
    @Type(() => ModelCreateWithoutImagesInput)
    create?: ModelCreateWithoutImagesInput;

    @Field(() => ModelCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ModelCreateOrConnectWithoutImagesInput)
    connectOrCreate?: ModelCreateOrConnectWithoutImagesInput;

    @Field(() => ModelWhereUniqueInput, {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    connect?: ModelWhereUniqueInput;
}
