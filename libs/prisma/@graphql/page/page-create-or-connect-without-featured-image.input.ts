import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Type } from 'class-transformer';
import { PageCreateWithoutFeaturedImageInput } from './page-create-without-featured-image.input';

@InputType()
export class PageCreateOrConnectWithoutFeaturedImageInput {

    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: PageWhereUniqueInput;

    @Field(() => PageCreateWithoutFeaturedImageInput, {nullable:false})
    @Type(() => PageCreateWithoutFeaturedImageInput)
    create!: PageCreateWithoutFeaturedImageInput;
}
