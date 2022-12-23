import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryImageWhereInput } from './gallery-image-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGalleryImageArgs {

    @Field(() => GalleryImageWhereInput, {nullable:true})
    @Type(() => GalleryImageWhereInput)
    where?: GalleryImageWhereInput;
}
