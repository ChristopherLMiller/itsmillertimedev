import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelUpdateWithoutTagsInput } from './model-update-without-tags.input';
import { Type } from 'class-transformer';
import { ModelCreateWithoutTagsInput } from './model-create-without-tags.input';

@InputType()
export class ModelUpsertWithoutTagsInput {

    @Field(() => ModelUpdateWithoutTagsInput, {nullable:false})
    @Type(() => ModelUpdateWithoutTagsInput)
    update!: ModelUpdateWithoutTagsInput;

    @Field(() => ModelCreateWithoutTagsInput, {nullable:false})
    @Type(() => ModelCreateWithoutTagsInput)
    create!: ModelCreateWithoutTagsInput;
}
