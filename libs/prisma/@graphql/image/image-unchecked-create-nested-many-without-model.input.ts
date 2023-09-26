import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutModelInput } from './image-create-without-model.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutModelInput } from './image-create-or-connect-without-model.input';
import { ImageCreateManyModelInputEnvelope } from './image-create-many-model-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageUncheckedCreateNestedManyWithoutModelInput {

    @Field(() => [ImageCreateWithoutModelInput], {nullable:true})
    @Type(() => ImageCreateWithoutModelInput)
    create?: Array<ImageCreateWithoutModelInput>;

    @Field(() => [ImageCreateOrConnectWithoutModelInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutModelInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutModelInput>;

    @Field(() => ImageCreateManyModelInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyModelInputEnvelope)
    createMany?: ImageCreateManyModelInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>>;
}
