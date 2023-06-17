import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { ImageUncheckedCreateNestedManyWithoutModelInput } from '../image/image-unchecked-create-nested-many-without-model.input';

@InputType()
export class ModelUncheckedCreateWithoutTagsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => ImageUncheckedCreateNestedManyWithoutModelInput, {nullable:true})
    images?: ImageUncheckedCreateNestedManyWithoutModelInput;

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

    @Field(() => Int, {nullable:false})
    manufacturerId!: number;

    @Field(() => Int, {nullable:false})
    scaleId!: number;
}
