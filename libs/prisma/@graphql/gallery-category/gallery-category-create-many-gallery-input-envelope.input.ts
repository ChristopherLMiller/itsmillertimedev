import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCategoryCreateManyGalleryInput } from './gallery-category-create-many-gallery.input';
import { Type } from 'class-transformer';

@InputType()
export class GalleryCategoryCreateManyGalleryInputEnvelope {

    @Field(() => [GalleryCategoryCreateManyGalleryInput], {nullable:false})
    @Type(() => GalleryCategoryCreateManyGalleryInput)
    data!: Array<GalleryCategoryCreateManyGalleryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
