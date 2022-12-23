import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCreateWithoutTagsInput } from './gallery-create-without-tags.input';
import { Type } from 'class-transformer';
import { GalleryCreateOrConnectWithoutTagsInput } from './gallery-create-or-connect-without-tags.input';
import { GalleryUpsertWithoutTagsInput } from './gallery-upsert-without-tags.input';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { GalleryUpdateWithoutTagsInput } from './gallery-update-without-tags.input';

@InputType()
export class GalleryUpdateOneWithoutTagsNestedInput {

    @Field(() => GalleryCreateWithoutTagsInput, {nullable:true})
    @Type(() => GalleryCreateWithoutTagsInput)
    create?: GalleryCreateWithoutTagsInput;

    @Field(() => GalleryCreateOrConnectWithoutTagsInput, {nullable:true})
    @Type(() => GalleryCreateOrConnectWithoutTagsInput)
    connectOrCreate?: GalleryCreateOrConnectWithoutTagsInput;

    @Field(() => GalleryUpsertWithoutTagsInput, {nullable:true})
    @Type(() => GalleryUpsertWithoutTagsInput)
    upsert?: GalleryUpsertWithoutTagsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => GalleryWhereUniqueInput, {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    connect?: GalleryWhereUniqueInput;

    @Field(() => GalleryUpdateWithoutTagsInput, {nullable:true})
    @Type(() => GalleryUpdateWithoutTagsInput)
    update?: GalleryUpdateWithoutTagsInput;
}
