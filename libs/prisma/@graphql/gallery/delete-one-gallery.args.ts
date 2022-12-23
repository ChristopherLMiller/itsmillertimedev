import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGalleryArgs {

    @Field(() => GalleryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryWhereUniqueInput)
    where!: GalleryWhereUniqueInput;
}
