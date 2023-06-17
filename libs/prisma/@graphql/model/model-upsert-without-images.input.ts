import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelUpdateWithoutImagesInput } from './model-update-without-images.input';
import { Type } from 'class-transformer';
import { ModelCreateWithoutImagesInput } from './model-create-without-images.input';

@InputType()
export class ModelUpsertWithoutImagesInput {

    @Field(() => ModelUpdateWithoutImagesInput, {nullable:false})
    @Type(() => ModelUpdateWithoutImagesInput)
    update!: ModelUpdateWithoutImagesInput;

    @Field(() => ModelCreateWithoutImagesInput, {nullable:false})
    @Type(() => ModelCreateWithoutImagesInput)
    create!: ModelCreateWithoutImagesInput;
}
