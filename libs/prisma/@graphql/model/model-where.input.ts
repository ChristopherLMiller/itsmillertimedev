import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumVisibilityFilter } from '../prisma/enum-visibility-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ModelTagsListRelationFilter } from '../model-tags/model-tags-list-relation-filter.input';
import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';
import { ManufacturerRelationFilter } from '../manufacturer/manufacturer-relation-filter.input';
import { ScaleRelationFilter } from '../scale/scale-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ModelWhereInput {

    @Field(() => [ModelWhereInput], {nullable:true})
    AND?: Array<ModelWhereInput>;

    @Field(() => [ModelWhereInput], {nullable:true})
    OR?: Array<ModelWhereInput>;

    @Field(() => [ModelWhereInput], {nullable:true})
    NOT?: Array<ModelWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

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

    @Field(() => ModelTagsListRelationFilter, {nullable:true})
    tags?: ModelTagsListRelationFilter;

    @Field(() => ImageListRelationFilter, {nullable:true})
    images?: ImageListRelationFilter;

    @Field(() => ManufacturerRelationFilter, {nullable:true})
    manufacturer?: ManufacturerRelationFilter;

    @Field(() => ScaleRelationFilter, {nullable:true})
    scale?: ScaleRelationFilter;

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
}
