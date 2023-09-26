import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { Int } from '@nestjs/graphql';
import { ImageCreateNestedManyWithoutModelInput } from '../image/image-create-nested-many-without-model.input';
import { ManufacturerCreateNestedOneWithoutModelInput } from '../manufacturer/manufacturer-create-nested-one-without-model.input';
import { ScaleCreateNestedOneWithoutModelInput } from '../scale/scale-create-nested-one-without-model.input';

@InputType()
export class ModelCreateWithoutTagsInput {

    @Field(() => String, {nullable:false})
    title!: string;

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

    @Field(() => ImageCreateNestedManyWithoutModelInput, {nullable:true})
    images?: ImageCreateNestedManyWithoutModelInput;

    @Field(() => ManufacturerCreateNestedOneWithoutModelInput, {nullable:false})
    manufacturer!: ManufacturerCreateNestedOneWithoutModelInput;

    @Field(() => ScaleCreateNestedOneWithoutModelInput, {nullable:false})
    scale!: ScaleCreateNestedOneWithoutModelInput;
}
