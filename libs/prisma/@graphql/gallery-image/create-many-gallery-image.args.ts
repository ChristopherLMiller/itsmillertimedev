import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryImageCreateManyInput } from './gallery-image-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGalleryImageArgs {

    @Field(() => [GalleryImageCreateManyInput], {nullable:false})
    @Type(() => GalleryImageCreateManyInput)
    data!: Array<GalleryImageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
