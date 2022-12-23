import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryImageScalarWhereInput } from './gallery-image-scalar-where.input';
import { Type } from 'class-transformer';
import { GalleryImageUpdateManyMutationInput } from './gallery-image-update-many-mutation.input';

@InputType()
export class GalleryImageUpdateManyWithWhereWithoutGalleriesInput {

    @Field(() => GalleryImageScalarWhereInput, {nullable:false})
    @Type(() => GalleryImageScalarWhereInput)
    where!: GalleryImageScalarWhereInput;

    @Field(() => GalleryImageUpdateManyMutationInput, {nullable:false})
    @Type(() => GalleryImageUpdateManyMutationInput)
    data!: GalleryImageUpdateManyMutationInput;
}
