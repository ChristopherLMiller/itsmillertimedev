import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryImageWhereInput } from './gallery-image-where.input';
import { Type } from 'class-transformer';
import { GalleryImageOrderByWithRelationInput } from './gallery-image-order-by-with-relation.input';
import { GalleryImageWhereUniqueInput } from './gallery-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GalleryImageScalarFieldEnum } from './gallery-image-scalar-field.enum';

@ArgsType()
export class FindFirstGalleryImageArgs {

    @Field(() => GalleryImageWhereInput, {nullable:true})
    @Type(() => GalleryImageWhereInput)
    where?: GalleryImageWhereInput;

    @Field(() => [GalleryImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GalleryImageOrderByWithRelationInput>;

    @Field(() => GalleryImageWhereUniqueInput, {nullable:true})
    cursor?: GalleryImageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GalleryImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GalleryImageScalarFieldEnum>;
}
