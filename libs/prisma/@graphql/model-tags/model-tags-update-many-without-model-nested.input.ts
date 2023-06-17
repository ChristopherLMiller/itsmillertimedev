import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelTagsCreateWithoutModelInput } from './model-tags-create-without-model.input';
import { Type } from 'class-transformer';
import { ModelTagsCreateOrConnectWithoutModelInput } from './model-tags-create-or-connect-without-model.input';
import { ModelTagsUpsertWithWhereUniqueWithoutModelInput } from './model-tags-upsert-with-where-unique-without-model.input';
import { ModelTagsCreateManyModelInputEnvelope } from './model-tags-create-many-model-input-envelope.input';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';
import { ModelTagsUpdateWithWhereUniqueWithoutModelInput } from './model-tags-update-with-where-unique-without-model.input';
import { ModelTagsUpdateManyWithWhereWithoutModelInput } from './model-tags-update-many-with-where-without-model.input';
import { ModelTagsScalarWhereInput } from './model-tags-scalar-where.input';

@InputType()
export class ModelTagsUpdateManyWithoutModelNestedInput {

    @Field(() => [ModelTagsCreateWithoutModelInput], {nullable:true})
    @Type(() => ModelTagsCreateWithoutModelInput)
    create?: Array<ModelTagsCreateWithoutModelInput>;

    @Field(() => [ModelTagsCreateOrConnectWithoutModelInput], {nullable:true})
    @Type(() => ModelTagsCreateOrConnectWithoutModelInput)
    connectOrCreate?: Array<ModelTagsCreateOrConnectWithoutModelInput>;

    @Field(() => [ModelTagsUpsertWithWhereUniqueWithoutModelInput], {nullable:true})
    @Type(() => ModelTagsUpsertWithWhereUniqueWithoutModelInput)
    upsert?: Array<ModelTagsUpsertWithWhereUniqueWithoutModelInput>;

    @Field(() => ModelTagsCreateManyModelInputEnvelope, {nullable:true})
    @Type(() => ModelTagsCreateManyModelInputEnvelope)
    createMany?: ModelTagsCreateManyModelInputEnvelope;

    @Field(() => [ModelTagsWhereUniqueInput], {nullable:true})
    @Type(() => ModelTagsWhereUniqueInput)
    set?: Array<ModelTagsWhereUniqueInput>;

    @Field(() => [ModelTagsWhereUniqueInput], {nullable:true})
    @Type(() => ModelTagsWhereUniqueInput)
    disconnect?: Array<ModelTagsWhereUniqueInput>;

    @Field(() => [ModelTagsWhereUniqueInput], {nullable:true})
    @Type(() => ModelTagsWhereUniqueInput)
    delete?: Array<ModelTagsWhereUniqueInput>;

    @Field(() => [ModelTagsWhereUniqueInput], {nullable:true})
    @Type(() => ModelTagsWhereUniqueInput)
    connect?: Array<ModelTagsWhereUniqueInput>;

    @Field(() => [ModelTagsUpdateWithWhereUniqueWithoutModelInput], {nullable:true})
    @Type(() => ModelTagsUpdateWithWhereUniqueWithoutModelInput)
    update?: Array<ModelTagsUpdateWithWhereUniqueWithoutModelInput>;

    @Field(() => [ModelTagsUpdateManyWithWhereWithoutModelInput], {nullable:true})
    @Type(() => ModelTagsUpdateManyWithWhereWithoutModelInput)
    updateMany?: Array<ModelTagsUpdateManyWithWhereWithoutModelInput>;

    @Field(() => [ModelTagsScalarWhereInput], {nullable:true})
    @Type(() => ModelTagsScalarWhereInput)
    deleteMany?: Array<ModelTagsScalarWhereInput>;
}
