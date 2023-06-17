import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';
import { Type } from 'class-transformer';
import { ModelTagsCreateWithoutModelInput } from './model-tags-create-without-model.input';

@InputType()
export class ModelTagsCreateOrConnectWithoutModelInput {

    @Field(() => ModelTagsWhereUniqueInput, {nullable:false})
    @Type(() => ModelTagsWhereUniqueInput)
    where!: ModelTagsWhereUniqueInput;

    @Field(() => ModelTagsCreateWithoutModelInput, {nullable:false})
    @Type(() => ModelTagsCreateWithoutModelInput)
    create!: ModelTagsCreateWithoutModelInput;
}
