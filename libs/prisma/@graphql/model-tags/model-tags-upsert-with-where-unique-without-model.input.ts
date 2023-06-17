import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';
import { Type } from 'class-transformer';
import { ModelTagsUpdateWithoutModelInput } from './model-tags-update-without-model.input';
import { ModelTagsCreateWithoutModelInput } from './model-tags-create-without-model.input';

@InputType()
export class ModelTagsUpsertWithWhereUniqueWithoutModelInput {

    @Field(() => ModelTagsWhereUniqueInput, {nullable:false})
    @Type(() => ModelTagsWhereUniqueInput)
    where!: ModelTagsWhereUniqueInput;

    @Field(() => ModelTagsUpdateWithoutModelInput, {nullable:false})
    @Type(() => ModelTagsUpdateWithoutModelInput)
    update!: ModelTagsUpdateWithoutModelInput;

    @Field(() => ModelTagsCreateWithoutModelInput, {nullable:false})
    @Type(() => ModelTagsCreateWithoutModelInput)
    create!: ModelTagsCreateWithoutModelInput;
}
