import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MarkerWhereInput } from './marker-where.input';
import { Type } from 'class-transformer';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class MarkerWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MarkerWhereInput], {nullable:true})
    @Type(() => MarkerWhereInput)
    AND?: Array<MarkerWhereInput>;

    @Field(() => [MarkerWhereInput], {nullable:true})
    @Type(() => MarkerWhereInput)
    OR?: Array<MarkerWhereInput>;

    @Field(() => [MarkerWhereInput], {nullable:true})
    @Type(() => MarkerWhereInput)
    NOT?: Array<MarkerWhereInput>;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    lat?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    lon?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    siteURL?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    galleryURL?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rating?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    visited?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    visits?: IntFilter;
}
