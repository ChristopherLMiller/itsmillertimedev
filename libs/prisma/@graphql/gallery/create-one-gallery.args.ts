import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCreateInput } from './gallery-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGalleryArgs {

    @Field(() => GalleryCreateInput, {nullable:false})
    @Type(() => GalleryCreateInput)
    data!: GalleryCreateInput;
}
