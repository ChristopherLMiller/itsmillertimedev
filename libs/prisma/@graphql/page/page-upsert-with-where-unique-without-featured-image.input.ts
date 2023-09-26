import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Type } from 'class-transformer';
import { PageUpdateWithoutFeaturedImageInput } from './page-update-without-featured-image.input';
import { PageCreateWithoutFeaturedImageInput } from './page-create-without-featured-image.input';

@InputType()
export class PageUpsertWithWhereUniqueWithoutFeaturedImageInput {

    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: Prisma.AtLeast<PageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => PageUpdateWithoutFeaturedImageInput, {nullable:false})
    @Type(() => PageUpdateWithoutFeaturedImageInput)
    update!: PageUpdateWithoutFeaturedImageInput;

    @Field(() => PageCreateWithoutFeaturedImageInput, {nullable:false})
    @Type(() => PageCreateWithoutFeaturedImageInput)
    create!: PageCreateWithoutFeaturedImageInput;
}
