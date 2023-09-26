import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageUpdateWithoutModelInput } from './image-update-without-model.input';
import { ImageCreateWithoutModelInput } from './image-create-without-model.input';

@InputType()
export class ImageUpsertWithWhereUniqueWithoutModelInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>;

    @Field(() => ImageUpdateWithoutModelInput, {nullable:false})
    @Type(() => ImageUpdateWithoutModelInput)
    update!: ImageUpdateWithoutModelInput;

    @Field(() => ImageCreateWithoutModelInput, {nullable:false})
    @Type(() => ImageCreateWithoutModelInput)
    create!: ImageCreateWithoutModelInput;
}
