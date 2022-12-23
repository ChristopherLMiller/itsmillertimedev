import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryTagCreateInput } from './gallery-tag-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGalleryTagArgs {

    @Field(() => GalleryTagCreateInput, {nullable:false})
    @Type(() => GalleryTagCreateInput)
    data!: GalleryTagCreateInput;
}
