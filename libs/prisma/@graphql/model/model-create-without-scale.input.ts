import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { ModelTagsCreateNestedManyWithoutModelInput } from '../model-tags/model-tags-create-nested-many-without-model.input';
import { ImageCreateNestedManyWithoutModelInput } from '../image/image-create-nested-many-without-model.input';
import { ManufacturerCreateNestedOneWithoutModelInput } from '../manufacturer/manufacturer-create-nested-one-without-model.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class ModelCreateWithoutScaleInput {

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;

    @Field(() => Visibility, {nullable:false})
    visibility!: keyof typeof Visibility;

    @Field(() => String, {nullable:false})
    metaTitle!: string;

    @Field(() => String, {nullable:false})
    summary!: string;

    @Field(() => String, {nullable:false})
    featuredImage!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ModelTagsCreateNestedManyWithoutModelInput, {nullable:true})
    tags?: ModelTagsCreateNestedManyWithoutModelInput;

    @Field(() => ImageCreateNestedManyWithoutModelInput, {nullable:true})
    images?: ImageCreateNestedManyWithoutModelInput;

    @Field(() => ManufacturerCreateNestedOneWithoutModelInput, {nullable:false})
    manufacturer!: ManufacturerCreateNestedOneWithoutModelInput;

    @Field(() => String, {nullable:true})
    clockifyProjectId?: string;

    @Field(() => String, {nullable:false})
    contents!: string;

    @Field(() => Int, {nullable:false})
    yearReleased!: number;

    @Field(() => Date, {nullable:false})
    completedAt!: Date | string;

    @Field(() => String, {nullable:false})
    imagePublic_id!: string;
}
