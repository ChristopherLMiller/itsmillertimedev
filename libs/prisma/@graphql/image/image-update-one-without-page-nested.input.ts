import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutPageInput } from './image-create-without-page.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutPageInput } from './image-create-or-connect-without-page.input';
import { ImageUpsertWithoutPageInput } from './image-upsert-without-page.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithoutPageInput } from './image-update-without-page.input';

@InputType()
export class ImageUpdateOneWithoutPageNestedInput {

    @Field(() => ImageCreateWithoutPageInput, {nullable:true})
    @Type(() => ImageCreateWithoutPageInput)
    create?: ImageCreateWithoutPageInput;

    @Field(() => ImageCreateOrConnectWithoutPageInput, {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutPageInput)
    connectOrCreate?: ImageCreateOrConnectWithoutPageInput;

    @Field(() => ImageUpsertWithoutPageInput, {nullable:true})
    @Type(() => ImageUpsertWithoutPageInput)
    upsert?: ImageUpsertWithoutPageInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ImageWhereUniqueInput, {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutPageInput, {nullable:true})
    @Type(() => ImageUpdateWithoutPageInput)
    update?: ImageUpdateWithoutPageInput;
}
