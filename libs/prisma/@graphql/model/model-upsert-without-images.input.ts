import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelUpdateWithoutImagesInput } from './model-update-without-images.input';
import { Type } from 'class-transformer';
import { ModelCreateWithoutImagesInput } from './model-create-without-images.input';
import { ModelWhereInput } from './model-where.input';

@InputType()
export class ModelUpsertWithoutImagesInput {

    @Field(() => ModelUpdateWithoutImagesInput, {nullable:false})
    @Type(() => ModelUpdateWithoutImagesInput)
    update!: ModelUpdateWithoutImagesInput;

    @Field(() => ModelCreateWithoutImagesInput, {nullable:false})
    @Type(() => ModelCreateWithoutImagesInput)
    create!: ModelCreateWithoutImagesInput;

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    where?: ModelWhereInput;
}
