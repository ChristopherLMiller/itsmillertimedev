import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCreateWithoutImagesInput } from './gallery-create-without-images.input';
import { Type } from 'class-transformer';
import { GalleryCreateOrConnectWithoutImagesInput } from './gallery-create-or-connect-without-images.input';
import { GalleryUpsertWithWhereUniqueWithoutImagesInput } from './gallery-upsert-with-where-unique-without-images.input';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { GalleryUpdateWithWhereUniqueWithoutImagesInput } from './gallery-update-with-where-unique-without-images.input';
import { GalleryUpdateManyWithWhereWithoutImagesInput } from './gallery-update-many-with-where-without-images.input';
import { GalleryScalarWhereInput } from './gallery-scalar-where.input';

@InputType()
export class GalleryUpdateManyWithoutImagesNestedInput {

    @Field(() => [GalleryCreateWithoutImagesInput], {nullable:true})
    @Type(() => GalleryCreateWithoutImagesInput)
    create?: Array<GalleryCreateWithoutImagesInput>;

    @Field(() => [GalleryCreateOrConnectWithoutImagesInput], {nullable:true})
    @Type(() => GalleryCreateOrConnectWithoutImagesInput)
    connectOrCreate?: Array<GalleryCreateOrConnectWithoutImagesInput>;

    @Field(() => [GalleryUpsertWithWhereUniqueWithoutImagesInput], {nullable:true})
    @Type(() => GalleryUpsertWithWhereUniqueWithoutImagesInput)
    upsert?: Array<GalleryUpsertWithWhereUniqueWithoutImagesInput>;

    @Field(() => [GalleryWhereUniqueInput], {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    set?: Array<GalleryWhereUniqueInput>;

    @Field(() => [GalleryWhereUniqueInput], {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    disconnect?: Array<GalleryWhereUniqueInput>;

    @Field(() => [GalleryWhereUniqueInput], {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    delete?: Array<GalleryWhereUniqueInput>;

    @Field(() => [GalleryWhereUniqueInput], {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    connect?: Array<GalleryWhereUniqueInput>;

    @Field(() => [GalleryUpdateWithWhereUniqueWithoutImagesInput], {nullable:true})
    @Type(() => GalleryUpdateWithWhereUniqueWithoutImagesInput)
    update?: Array<GalleryUpdateWithWhereUniqueWithoutImagesInput>;

    @Field(() => [GalleryUpdateManyWithWhereWithoutImagesInput], {nullable:true})
    @Type(() => GalleryUpdateManyWithWhereWithoutImagesInput)
    updateMany?: Array<GalleryUpdateManyWithWhereWithoutImagesInput>;

    @Field(() => [GalleryScalarWhereInput], {nullable:true})
    @Type(() => GalleryScalarWhereInput)
    deleteMany?: Array<GalleryScalarWhereInput>;
}
