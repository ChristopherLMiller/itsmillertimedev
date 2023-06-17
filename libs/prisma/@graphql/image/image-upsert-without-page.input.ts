import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageUpdateWithoutPageInput } from './image-update-without-page.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutPageInput } from './image-create-without-page.input';

@InputType()
export class ImageUpsertWithoutPageInput {

    @Field(() => ImageUpdateWithoutPageInput, {nullable:false})
    @Type(() => ImageUpdateWithoutPageInput)
    update!: ImageUpdateWithoutPageInput;

    @Field(() => ImageCreateWithoutPageInput, {nullable:false})
    @Type(() => ImageCreateWithoutPageInput)
    create!: ImageCreateWithoutPageInput;
}
