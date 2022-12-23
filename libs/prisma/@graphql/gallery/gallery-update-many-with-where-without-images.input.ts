import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryScalarWhereInput } from './gallery-scalar-where.input';
import { Type } from 'class-transformer';
import { GalleryUpdateManyMutationInput } from './gallery-update-many-mutation.input';

@InputType()
export class GalleryUpdateManyWithWhereWithoutImagesInput {

    @Field(() => GalleryScalarWhereInput, {nullable:false})
    @Type(() => GalleryScalarWhereInput)
    where!: GalleryScalarWhereInput;

    @Field(() => GalleryUpdateManyMutationInput, {nullable:false})
    @Type(() => GalleryUpdateManyMutationInput)
    data!: GalleryUpdateManyMutationInput;
}
