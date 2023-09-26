import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutPostInput } from './image-create-without-post.input';

@InputType()
export class ImageCreateOrConnectWithoutPostInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>;

    @Field(() => ImageCreateWithoutPostInput, {nullable:false})
    @Type(() => ImageCreateWithoutPostInput)
    create!: ImageCreateWithoutPostInput;
}
