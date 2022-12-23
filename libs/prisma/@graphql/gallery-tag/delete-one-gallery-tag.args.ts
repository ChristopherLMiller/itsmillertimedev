import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryTagWhereUniqueInput } from './gallery-tag-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGalleryTagArgs {

    @Field(() => GalleryTagWhereUniqueInput, {nullable:false})
    @Type(() => GalleryTagWhereUniqueInput)
    where!: GalleryTagWhereUniqueInput;
}
