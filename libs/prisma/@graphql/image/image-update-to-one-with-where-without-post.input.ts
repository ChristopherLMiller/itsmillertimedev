import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';
import { Type } from 'class-transformer';
import { ImageUpdateWithoutPostInput } from './image-update-without-post.input';

@InputType()
export class ImageUpdateToOneWithWhereWithoutPostInput {

    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    where?: ImageWhereInput;

    @Field(() => ImageUpdateWithoutPostInput, {nullable:false})
    @Type(() => ImageUpdateWithoutPostInput)
    data!: ImageUpdateWithoutPostInput;
}
