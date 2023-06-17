import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageUpdateWithoutModelInput } from './image-update-without-model.input';
import { ImageCreateWithoutModelInput } from './image-create-without-model.input';

@InputType()
export class ImageUpsertWithWhereUniqueWithoutModelInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutModelInput, {nullable:false})
    @Type(() => ImageUpdateWithoutModelInput)
    update!: ImageUpdateWithoutModelInput;

    @Field(() => ImageCreateWithoutModelInput, {nullable:false})
    @Type(() => ImageCreateWithoutModelInput)
    create!: ImageCreateWithoutModelInput;
}
