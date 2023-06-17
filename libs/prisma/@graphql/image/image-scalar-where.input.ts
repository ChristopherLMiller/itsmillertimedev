import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class ImageScalarWhereInput {

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    AND?: Array<ImageScalarWhereInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    OR?: Array<ImageScalarWhereInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    NOT?: Array<ImageScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    public_id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    version?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    format?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    secureUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    alt?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    caption?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    width?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    height?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    bytes?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    thumbnail?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    exif?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    modelId?: IntNullableFilter;
}
