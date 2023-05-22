import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Type } from 'class-transformer';
import { PageUpdateWithoutFeaturedImageInput } from './page-update-without-featured-image.input';

@InputType()
export class PageUpdateWithWhereUniqueWithoutFeaturedImageInput {

    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: PageWhereUniqueInput;

    @Field(() => PageUpdateWithoutFeaturedImageInput, {nullable:false})
    @Type(() => PageUpdateWithoutFeaturedImageInput)
    data!: PageUpdateWithoutFeaturedImageInput;
}
