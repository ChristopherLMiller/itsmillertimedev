import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ModelWhereInput } from './model-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumVisibilityFilter } from '../prisma/enum-visibility-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ModelTagsListRelationFilter } from '../model-tags/model-tags-list-relation-filter.input';
import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';
import { ManufacturerRelationFilter } from '../manufacturer/manufacturer-relation-filter.input';
import { ScaleRelationFilter } from '../scale/scale-relation-filter.input';

@InputType()
export class ModelWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [ModelWhereInput], {nullable:true})
    AND?: Array<ModelWhereInput>;

    @Field(() => [ModelWhereInput], {nullable:true})
    OR?: Array<ModelWhereInput>;

    @Field(() => [ModelWhereInput], {nullable:true})
    NOT?: Array<ModelWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    completed?: BoolFilter;

    @Field(() => EnumVisibilityFilter, {nullable:true})
    visibility?: EnumVisibilityFilter;

    @Field(() => StringFilter, {nullable:true})
    metaTitle?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    summary?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    featuredImage?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    clockifyProjectId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    contents?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    yearReleased?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    completedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    imagePublic_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    manufacturerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    scaleId?: IntFilter;

    @Field(() => ModelTagsListRelationFilter, {nullable:true})
    tags?: ModelTagsListRelationFilter;

    @Field(() => ImageListRelationFilter, {nullable:true})
    images?: ImageListRelationFilter;

    @Field(() => ManufacturerRelationFilter, {nullable:true})
    manufacturer?: ManufacturerRelationFilter;

    @Field(() => ScaleRelationFilter, {nullable:true})
    scale?: ScaleRelationFilter;
}
