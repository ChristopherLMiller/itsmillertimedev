import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutPostInput } from './image-create-without-post.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutPostInput } from './image-create-or-connect-without-post.input';
import { ImageUpsertWithoutPostInput } from './image-upsert-without-post.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithoutPostInput } from './image-update-without-post.input';

@InputType()
export class ImageUpdateOneWithoutPostNestedInput {

    @Field(() => ImageCreateWithoutPostInput, {nullable:true})
    @Type(() => ImageCreateWithoutPostInput)
    create?: ImageCreateWithoutPostInput;

    @Field(() => ImageCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutPostInput)
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput;

    @Field(() => ImageUpsertWithoutPostInput, {nullable:true})
    @Type(() => ImageUpsertWithoutPostInput)
    upsert?: ImageUpsertWithoutPostInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ImageWhereUniqueInput, {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutPostInput, {nullable:true})
    @Type(() => ImageUpdateWithoutPostInput)
    update?: ImageUpdateWithoutPostInput;
}
