import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';
import { ModelCreateWithoutImagesInput } from './model-create-without-images.input';

@InputType()
export class ModelCreateOrConnectWithoutImagesInput {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: ModelWhereUniqueInput;

    @Field(() => ModelCreateWithoutImagesInput, {nullable:false})
    @Type(() => ModelCreateWithoutImagesInput)
    create!: ModelCreateWithoutImagesInput;
}
