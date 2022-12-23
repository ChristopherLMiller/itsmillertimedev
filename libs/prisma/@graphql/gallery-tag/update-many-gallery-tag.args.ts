import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryTagUpdateManyMutationInput } from './gallery-tag-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GalleryTagWhereInput } from './gallery-tag-where.input';

@ArgsType()
export class UpdateManyGalleryTagArgs {

    @Field(() => GalleryTagUpdateManyMutationInput, {nullable:false})
    @Type(() => GalleryTagUpdateManyMutationInput)
    data!: GalleryTagUpdateManyMutationInput;

    @Field(() => GalleryTagWhereInput, {nullable:true})
    @Type(() => GalleryTagWhereInput)
    where?: GalleryTagWhereInput;
}
