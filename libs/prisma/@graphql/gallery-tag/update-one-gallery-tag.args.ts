import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryTagUpdateInput } from './gallery-tag-update.input';
import { Type } from 'class-transformer';
import { GalleryTagWhereUniqueInput } from './gallery-tag-where-unique.input';

@ArgsType()
export class UpdateOneGalleryTagArgs {

    @Field(() => GalleryTagUpdateInput, {nullable:false})
    @Type(() => GalleryTagUpdateInput)
    data!: GalleryTagUpdateInput;

    @Field(() => GalleryTagWhereUniqueInput, {nullable:false})
    @Type(() => GalleryTagWhereUniqueInput)
    where!: GalleryTagWhereUniqueInput;
}
