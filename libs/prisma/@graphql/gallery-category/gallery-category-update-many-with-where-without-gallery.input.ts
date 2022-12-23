import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCategoryScalarWhereInput } from './gallery-category-scalar-where.input';
import { Type } from 'class-transformer';
import { GalleryCategoryUpdateManyMutationInput } from './gallery-category-update-many-mutation.input';

@InputType()
export class GalleryCategoryUpdateManyWithWhereWithoutGalleryInput {

    @Field(() => GalleryCategoryScalarWhereInput, {nullable:false})
    @Type(() => GalleryCategoryScalarWhereInput)
    where!: GalleryCategoryScalarWhereInput;

    @Field(() => GalleryCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => GalleryCategoryUpdateManyMutationInput)
    data!: GalleryCategoryUpdateManyMutationInput;
}
