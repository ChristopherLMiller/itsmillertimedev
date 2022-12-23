import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryWhereInput } from './gallery-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGalleryArgs {

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    where?: GalleryWhereInput;
}
