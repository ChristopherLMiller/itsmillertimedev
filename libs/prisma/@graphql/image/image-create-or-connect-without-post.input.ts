import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutPostInput } from './image-create-without-post.input';

@InputType()
export class ImageCreateOrConnectWithoutPostInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutPostInput, {nullable:false})
    @Type(() => ImageCreateWithoutPostInput)
    create!: ImageCreateWithoutPostInput;
}
