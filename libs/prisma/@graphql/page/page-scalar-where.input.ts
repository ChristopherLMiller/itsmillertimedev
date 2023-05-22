import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class PageScalarWhereInput {

    @Field(() => [PageScalarWhereInput], {nullable:true})
    AND?: Array<PageScalarWhereInput>;

    @Field(() => [PageScalarWhereInput], {nullable:true})
    OR?: Array<PageScalarWhereInput>;

    @Field(() => [PageScalarWhereInput], {nullable:true})
    NOT?: Array<PageScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    summary?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imagePublic_id?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPublic?: BoolFilter;
}
