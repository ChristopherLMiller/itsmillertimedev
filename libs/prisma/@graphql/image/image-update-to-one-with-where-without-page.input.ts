import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';
import { Type } from 'class-transformer';
import { ImageUpdateWithoutPageInput } from './image-update-without-page.input';

@InputType()
export class ImageUpdateToOneWithWhereWithoutPageInput {

    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    where?: ImageWhereInput;

    @Field(() => ImageUpdateWithoutPageInput, {nullable:false})
    @Type(() => ImageUpdateWithoutPageInput)
    data!: ImageUpdateWithoutPageInput;
}
