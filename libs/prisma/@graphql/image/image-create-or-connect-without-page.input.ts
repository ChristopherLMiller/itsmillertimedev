import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutPageInput } from './image-create-without-page.input';

@InputType()
export class ImageCreateOrConnectWithoutPageInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>;

    @Field(() => ImageCreateWithoutPageInput, {nullable:false})
    @Type(() => ImageCreateWithoutPageInput)
    create!: ImageCreateWithoutPageInput;
}
