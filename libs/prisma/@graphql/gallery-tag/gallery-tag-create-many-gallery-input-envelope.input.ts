import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryTagCreateManyGalleryInput } from './gallery-tag-create-many-gallery.input';
import { Type } from 'class-transformer';

@InputType()
export class GalleryTagCreateManyGalleryInputEnvelope {

    @Field(() => [GalleryTagCreateManyGalleryInput], {nullable:false})
    @Type(() => GalleryTagCreateManyGalleryInput)
    data!: Array<GalleryTagCreateManyGalleryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
