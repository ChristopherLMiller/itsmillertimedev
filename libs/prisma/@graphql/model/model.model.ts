import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { Int } from '@nestjs/graphql';
import { ModelTags } from '../model-tags/model-tags.model';
import { Image } from '../image/image.model';
import { Manufacturer } from '../manufacturer/manufacturer.model';
import { Scale } from '../scale/scale.model';
import { ModelCount } from './model-count.output';

@ObjectType()
export class Model {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    completed!: boolean;

    @Field(() => Visibility, {nullable:false})
    visibility!: keyof typeof Visibility;

    @Field(() => String, {nullable:false})
    metaTitle!: string;

    @Field(() => String, {nullable:false})
    summary!: string;

    @Field(() => String, {nullable:false})
    featuredImage!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    clockifyProjectId!: string | null;

    @Field(() => String, {nullable:false})
    contents!: string;

    @Field(() => Int, {nullable:false})
    yearReleased!: number;

    @Field(() => Date, {nullable:false})
    completedAt!: Date;

    @Field(() => String, {nullable:false})
    imagePublic_id!: string;

    @Field(() => Int, {nullable:false})
    manufacturerId!: number;

    @Field(() => Int, {nullable:false})
    scaleId!: number;

    @Field(() => [ModelTags], {nullable:true})
    tags?: Array<ModelTags>;

    @Field(() => [Image], {nullable:true})
    images?: Array<Image>;

    @Field(() => Manufacturer, {nullable:false})
    manufacturer?: Manufacturer;

    @Field(() => Scale, {nullable:false})
    scale?: Scale;

    @Field(() => ModelCount, {nullable:false})
    _count?: ModelCount;
}
