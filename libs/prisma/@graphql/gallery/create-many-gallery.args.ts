import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCreateManyInput } from './gallery-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGalleryArgs {

    @Field(() => [GalleryCreateManyInput], {nullable:false})
    @Type(() => GalleryCreateManyInput)
    data!: Array<GalleryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
