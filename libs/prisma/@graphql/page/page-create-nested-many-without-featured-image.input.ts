import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageCreateWithoutFeaturedImageInput } from './page-create-without-featured-image.input';
import { Type } from 'class-transformer';
import { PageCreateOrConnectWithoutFeaturedImageInput } from './page-create-or-connect-without-featured-image.input';
import { PageCreateManyFeaturedImageInputEnvelope } from './page-create-many-featured-image-input-envelope.input';
import { PageWhereUniqueInput } from './page-where-unique.input';

@InputType()
export class PageCreateNestedManyWithoutFeaturedImageInput {

    @Field(() => [PageCreateWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PageCreateWithoutFeaturedImageInput)
    create?: Array<PageCreateWithoutFeaturedImageInput>;

    @Field(() => [PageCreateOrConnectWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PageCreateOrConnectWithoutFeaturedImageInput)
    connectOrCreate?: Array<PageCreateOrConnectWithoutFeaturedImageInput>;

    @Field(() => PageCreateManyFeaturedImageInputEnvelope, {nullable:true})
    @Type(() => PageCreateManyFeaturedImageInputEnvelope)
    createMany?: PageCreateManyFeaturedImageInputEnvelope;

    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    connect?: Array<PageWhereUniqueInput>;
}
