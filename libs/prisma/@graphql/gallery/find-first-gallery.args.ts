import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryWhereInput } from './gallery-where.input';
import { Type } from 'class-transformer';
import { GalleryOrderByWithRelationInput } from './gallery-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GalleryScalarFieldEnum } from './gallery-scalar-field.enum';

@ArgsType()
export class FindFirstGalleryArgs {

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    where?: GalleryWhereInput;

    @Field(() => [GalleryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GalleryOrderByWithRelationInput>;

    @Field(() => GalleryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GalleryWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GalleryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GalleryScalarFieldEnum>;
}
