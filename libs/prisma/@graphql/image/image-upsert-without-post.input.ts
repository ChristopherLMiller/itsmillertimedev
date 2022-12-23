import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageUpdateWithoutPostInput } from './image-update-without-post.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutPostInput } from './image-create-without-post.input';

@InputType()
export class ImageUpsertWithoutPostInput {

    @Field(() => ImageUpdateWithoutPostInput, {nullable:false})
    @Type(() => ImageUpdateWithoutPostInput)
    update!: ImageUpdateWithoutPostInput;

    @Field(() => ImageCreateWithoutPostInput, {nullable:false})
    @Type(() => ImageCreateWithoutPostInput)
    create!: ImageCreateWithoutPostInput;
}
