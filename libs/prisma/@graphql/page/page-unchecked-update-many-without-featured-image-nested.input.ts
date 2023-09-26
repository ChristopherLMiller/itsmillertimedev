import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageCreateWithoutFeaturedImageInput } from './page-create-without-featured-image.input';
import { Type } from 'class-transformer';
import { PageCreateOrConnectWithoutFeaturedImageInput } from './page-create-or-connect-without-featured-image.input';
import { PageUpsertWithWhereUniqueWithoutFeaturedImageInput } from './page-upsert-with-where-unique-without-featured-image.input';
import { PageCreateManyFeaturedImageInputEnvelope } from './page-create-many-featured-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { PageUpdateWithWhereUniqueWithoutFeaturedImageInput } from './page-update-with-where-unique-without-featured-image.input';
import { PageUpdateManyWithWhereWithoutFeaturedImageInput } from './page-update-many-with-where-without-featured-image.input';
import { PageScalarWhereInput } from './page-scalar-where.input';

@InputType()
export class PageUncheckedUpdateManyWithoutFeaturedImageNestedInput {

    @Field(() => [PageCreateWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PageCreateWithoutFeaturedImageInput)
    create?: Array<PageCreateWithoutFeaturedImageInput>;

    @Field(() => [PageCreateOrConnectWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PageCreateOrConnectWithoutFeaturedImageInput)
    connectOrCreate?: Array<PageCreateOrConnectWithoutFeaturedImageInput>;

    @Field(() => [PageUpsertWithWhereUniqueWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PageUpsertWithWhereUniqueWithoutFeaturedImageInput)
    upsert?: Array<PageUpsertWithWhereUniqueWithoutFeaturedImageInput>;

    @Field(() => PageCreateManyFeaturedImageInputEnvelope, {nullable:true})
    @Type(() => PageCreateManyFeaturedImageInputEnvelope)
    createMany?: PageCreateManyFeaturedImageInputEnvelope;

    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PageUpdateWithWhereUniqueWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PageUpdateWithWhereUniqueWithoutFeaturedImageInput)
    update?: Array<PageUpdateWithWhereUniqueWithoutFeaturedImageInput>;

    @Field(() => [PageUpdateManyWithWhereWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PageUpdateManyWithWhereWithoutFeaturedImageInput)
    updateMany?: Array<PageUpdateManyWithWhereWithoutFeaturedImageInput>;

    @Field(() => [PageScalarWhereInput], {nullable:true})
    @Type(() => PageScalarWhereInput)
    deleteMany?: Array<PageScalarWhereInput>;
}
