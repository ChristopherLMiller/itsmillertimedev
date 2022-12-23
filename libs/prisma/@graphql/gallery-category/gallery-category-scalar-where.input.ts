import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class GalleryCategoryScalarWhereInput {

    @Field(() => [GalleryCategoryScalarWhereInput], {nullable:true})
    AND?: Array<GalleryCategoryScalarWhereInput>;

    @Field(() => [GalleryCategoryScalarWhereInput], {nullable:true})
    OR?: Array<GalleryCategoryScalarWhereInput>;

    @Field(() => [GalleryCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<GalleryCategoryScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    galleryId?: IntNullableFilter;
}
