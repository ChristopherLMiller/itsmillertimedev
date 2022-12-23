import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryTagScalarWhereInput } from './gallery-tag-scalar-where.input';
import { Type } from 'class-transformer';
import { GalleryTagUpdateManyMutationInput } from './gallery-tag-update-many-mutation.input';

@InputType()
export class GalleryTagUpdateManyWithWhereWithoutGalleryInput {

    @Field(() => GalleryTagScalarWhereInput, {nullable:false})
    @Type(() => GalleryTagScalarWhereInput)
    where!: GalleryTagScalarWhereInput;

    @Field(() => GalleryTagUpdateManyMutationInput, {nullable:false})
    @Type(() => GalleryTagUpdateManyMutationInput)
    data!: GalleryTagUpdateManyMutationInput;
}
