import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutModelInput } from './image-create-without-model.input';

@InputType()
export class ImageCreateOrConnectWithoutModelInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutModelInput, {nullable:false})
    @Type(() => ImageCreateWithoutModelInput)
    create!: ImageCreateWithoutModelInput;
}
