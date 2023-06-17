import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutPageInput } from './image-create-without-page.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutPageInput } from './image-create-or-connect-without-page.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateNestedOneWithoutPageInput {

    @Field(() => ImageCreateWithoutPageInput, {nullable:true})
    @Type(() => ImageCreateWithoutPageInput)
    create?: ImageCreateWithoutPageInput;

    @Field(() => ImageCreateOrConnectWithoutPageInput, {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutPageInput)
    connectOrCreate?: ImageCreateOrConnectWithoutPageInput;

    @Field(() => ImageWhereUniqueInput, {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: ImageWhereUniqueInput;
}
