import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryImageWhereUniqueInput } from './gallery-image-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryImageCreateInput } from './gallery-image-create.input';
import { GalleryImageUpdateInput } from './gallery-image-update.input';

@ArgsType()
export class UpsertOneGalleryImageArgs {

    @Field(() => GalleryImageWhereUniqueInput, {nullable:false})
    @Type(() => GalleryImageWhereUniqueInput)
    where!: GalleryImageWhereUniqueInput;

    @Field(() => GalleryImageCreateInput, {nullable:false})
    @Type(() => GalleryImageCreateInput)
    create!: GalleryImageCreateInput;

    @Field(() => GalleryImageUpdateInput, {nullable:false})
    @Type(() => GalleryImageUpdateInput)
    update!: GalleryImageUpdateInput;
}
