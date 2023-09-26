import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryWhereInput } from './gallery-where.input';
import { Type } from 'class-transformer';
import { GalleryUpdateWithoutTagsInput } from './gallery-update-without-tags.input';

@InputType()
export class GalleryUpdateToOneWithWhereWithoutTagsInput {

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    where?: GalleryWhereInput;

    @Field(() => GalleryUpdateWithoutTagsInput, {nullable:false})
    @Type(() => GalleryUpdateWithoutTagsInput)
    data!: GalleryUpdateWithoutTagsInput;
}
