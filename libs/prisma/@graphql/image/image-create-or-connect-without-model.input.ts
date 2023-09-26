import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutModelInput } from './image-create-without-model.input';

@InputType()
export class ImageCreateOrConnectWithoutModelInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>;

    @Field(() => ImageCreateWithoutModelInput, {nullable:false})
    @Type(() => ImageCreateWithoutModelInput)
    create!: ImageCreateWithoutModelInput;
}
