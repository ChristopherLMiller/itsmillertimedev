import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutModelInput } from './image-create-without-model.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutModelInput } from './image-create-or-connect-without-model.input';
import { ImageUpsertWithWhereUniqueWithoutModelInput } from './image-upsert-with-where-unique-without-model.input';
import { ImageCreateManyModelInputEnvelope } from './image-create-many-model-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithWhereUniqueWithoutModelInput } from './image-update-with-where-unique-without-model.input';
import { ImageUpdateManyWithWhereWithoutModelInput } from './image-update-many-with-where-without-model.input';
import { ImageScalarWhereInput } from './image-scalar-where.input';

@InputType()
export class ImageUncheckedUpdateManyWithoutModelNestedInput {

    @Field(() => [ImageCreateWithoutModelInput], {nullable:true})
    @Type(() => ImageCreateWithoutModelInput)
    create?: Array<ImageCreateWithoutModelInput>;

    @Field(() => [ImageCreateOrConnectWithoutModelInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutModelInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutModelInput>;

    @Field(() => [ImageUpsertWithWhereUniqueWithoutModelInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutModelInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutModelInput>;

    @Field(() => ImageCreateManyModelInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyModelInputEnvelope)
    createMany?: ImageCreateManyModelInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'public_id'>>;

    @Field(() => [ImageUpdateWithWhereUniqueWithoutModelInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutModelInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutModelInput>;

    @Field(() => [ImageUpdateManyWithWhereWithoutModelInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutModelInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutModelInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}
