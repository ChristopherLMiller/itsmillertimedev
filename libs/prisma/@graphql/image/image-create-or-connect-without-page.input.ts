import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutPageInput } from './image-create-without-page.input';

@InputType()
export class ImageCreateOrConnectWithoutPageInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutPageInput, {nullable:false})
    @Type(() => ImageCreateWithoutPageInput)
    create!: ImageCreateWithoutPageInput;
}
