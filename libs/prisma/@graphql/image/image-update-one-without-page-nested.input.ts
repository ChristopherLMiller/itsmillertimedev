import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutPageInput } from './image-create-without-page.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutPageInput } from './image-create-or-connect-without-page.input';
import { ImageUpsertWithoutPageInput } from './image-upsert-without-page.input';
import { ImageWhereInput } from './image-where.input';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateToOneWithWhereWithoutPageInput } from './image-update-to-one-with-where-without-page.input';

@InputType()
export class ImageUpdateOneWithoutPageNestedInput {

    @Field(() => ImageCreateWithoutPageInput, {nullable:true})
    @Type(() => ImageCreateWithoutPageInput)
    create?: ImageCreateWithoutPageInput;

    @Field(() => ImageCreateOrConnectWithoutPageInput, {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutPageInput)
    connectOrCreate?: ImageCreateOrConnectWithoutPageInput;

    @Field(() => ImageUpsertWithoutPageInput, {nullable:true})
    @Type(() => ImageUpsertWithoutPageInput)
    upsert?: ImageUpsertWithoutPageInput;

    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    disconnect?: ImageWhereInput;

    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    delete?: ImageWhereInput;

    @Field(() => ImageWhereUniqueInput, {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>;

    @Field(() => ImageUpdateToOneWithWhereWithoutPageInput, {nullable:true})
    @Type(() => ImageUpdateToOneWithWhereWithoutPageInput)
    update?: ImageUpdateToOneWithWhereWithoutPageInput;
}
