import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelTagsCreateWithoutModelInput } from './model-tags-create-without-model.input';
import { Type } from 'class-transformer';
import { ModelTagsCreateOrConnectWithoutModelInput } from './model-tags-create-or-connect-without-model.input';
import { ModelTagsCreateManyModelInputEnvelope } from './model-tags-create-many-model-input-envelope.input';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';

@InputType()
export class ModelTagsUncheckedCreateNestedManyWithoutModelInput {

    @Field(() => [ModelTagsCreateWithoutModelInput], {nullable:true})
    @Type(() => ModelTagsCreateWithoutModelInput)
    create?: Array<ModelTagsCreateWithoutModelInput>;

    @Field(() => [ModelTagsCreateOrConnectWithoutModelInput], {nullable:true})
    @Type(() => ModelTagsCreateOrConnectWithoutModelInput)
    connectOrCreate?: Array<ModelTagsCreateOrConnectWithoutModelInput>;

    @Field(() => ModelTagsCreateManyModelInputEnvelope, {nullable:true})
    @Type(() => ModelTagsCreateManyModelInputEnvelope)
    createMany?: ModelTagsCreateManyModelInputEnvelope;

    @Field(() => [ModelTagsWhereUniqueInput], {nullable:true})
    @Type(() => ModelTagsWhereUniqueInput)
    connect?: Array<ModelTagsWhereUniqueInput>;
}
