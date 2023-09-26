import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutPostInput } from './image-create-without-post.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutPostInput } from './image-create-or-connect-without-post.input';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateNestedOneWithoutPostInput {

    @Field(() => ImageCreateWithoutPostInput, {nullable:true})
    @Type(() => ImageCreateWithoutPostInput)
    create?: ImageCreateWithoutPostInput;

    @Field(() => ImageCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutPostInput)
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput;

    @Field(() => ImageWhereUniqueInput, {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>;
}
