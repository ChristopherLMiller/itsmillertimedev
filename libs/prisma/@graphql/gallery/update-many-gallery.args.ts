import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryUpdateManyMutationInput } from './gallery-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GalleryWhereInput } from './gallery-where.input';

@ArgsType()
export class UpdateManyGalleryArgs {

    @Field(() => GalleryUpdateManyMutationInput, {nullable:false})
    @Type(() => GalleryUpdateManyMutationInput)
    data!: GalleryUpdateManyMutationInput;

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    where?: GalleryWhereInput;
}
