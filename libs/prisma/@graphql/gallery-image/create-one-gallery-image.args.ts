import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryImageCreateInput } from './gallery-image-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGalleryImageArgs {

    @Field(() => GalleryImageCreateInput, {nullable:false})
    @Type(() => GalleryImageCreateInput)
    data!: GalleryImageCreateInput;
}
