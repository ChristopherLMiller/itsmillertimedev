import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryTagWhereInput } from './gallery-tag-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGalleryTagArgs {

    @Field(() => GalleryTagWhereInput, {nullable:true})
    @Type(() => GalleryTagWhereInput)
    where?: GalleryTagWhereInput;
}
