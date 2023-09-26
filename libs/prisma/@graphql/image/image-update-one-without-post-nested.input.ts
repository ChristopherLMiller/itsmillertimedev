import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutPostInput } from './image-create-without-post.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutPostInput } from './image-create-or-connect-without-post.input';
import { ImageUpsertWithoutPostInput } from './image-upsert-without-post.input';
import { ImageWhereInput } from './image-where.input';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateToOneWithWhereWithoutPostInput } from './image-update-to-one-with-where-without-post.input';

@InputType()
export class ImageUpdateOneWithoutPostNestedInput {

    @Field(() => ImageCreateWithoutPostInput, {nullable:true})
    @Type(() => ImageCreateWithoutPostInput)
    create?: ImageCreateWithoutPostInput;

    @Field(() => ImageCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutPostInput)
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput;

    @Field(() => ImageUpsertWithoutPostInput, {nullable:true})
    @Type(() => ImageUpsertWithoutPostInput)
    upsert?: ImageUpsertWithoutPostInput;

    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    disconnect?: ImageWhereInput;

    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    delete?: ImageWhereInput;

    @Field(() => ImageWhereUniqueInput, {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>;

    @Field(() => ImageUpdateToOneWithWhereWithoutPostInput, {nullable:true})
    @Type(() => ImageUpdateToOneWithWhereWithoutPostInput)
    update?: ImageUpdateToOneWithWhereWithoutPostInput;
}
