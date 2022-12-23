import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryTagCreateManyInput } from './gallery-tag-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGalleryTagArgs {

    @Field(() => [GalleryTagCreateManyInput], {nullable:false})
    @Type(() => GalleryTagCreateManyInput)
    data!: Array<GalleryTagCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
