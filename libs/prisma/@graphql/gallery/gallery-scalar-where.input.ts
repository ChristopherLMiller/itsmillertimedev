import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumVisibilityFilter } from '../prisma/enum-visibility-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class GalleryScalarWhereInput {

    @Field(() => [GalleryScalarWhereInput], {nullable:true})
    AND?: Array<GalleryScalarWhereInput>;

    @Field(() => [GalleryScalarWhereInput], {nullable:true})
    OR?: Array<GalleryScalarWhereInput>;

    @Field(() => [GalleryScalarWhereInput], {nullable:true})
    NOT?: Array<GalleryScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    meta?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumVisibilityFilter, {nullable:true})
    visibility?: EnumVisibilityFilter;

    @Field(() => BoolFilter, {nullable:true})
    isNsfw?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;
}
