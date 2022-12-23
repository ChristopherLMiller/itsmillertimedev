import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryImageUpdateManyMutationInput } from './gallery-image-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GalleryImageWhereInput } from './gallery-image-where.input';

@ArgsType()
export class UpdateManyGalleryImageArgs {

    @Field(() => GalleryImageUpdateManyMutationInput, {nullable:false})
    @Type(() => GalleryImageUpdateManyMutationInput)
    data!: GalleryImageUpdateManyMutationInput;

    @Field(() => GalleryImageWhereInput, {nullable:true})
    @Type(() => GalleryImageWhereInput)
    where?: GalleryImageWhereInput;
}
