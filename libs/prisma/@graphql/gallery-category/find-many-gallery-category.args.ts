import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCategoryWhereInput } from './gallery-category-where.input';
import { Type } from 'class-transformer';
import { GalleryCategoryOrderByWithRelationInput } from './gallery-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GalleryCategoryWhereUniqueInput } from './gallery-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GalleryCategoryScalarFieldEnum } from './gallery-category-scalar-field.enum';

@ArgsType()
export class FindManyGalleryCategoryArgs {

    @Field(() => GalleryCategoryWhereInput, {nullable:true})
    @Type(() => GalleryCategoryWhereInput)
    where?: GalleryCategoryWhereInput;

    @Field(() => [GalleryCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GalleryCategoryOrderByWithRelationInput>;

    @Field(() => GalleryCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GalleryCategoryWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GalleryCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GalleryCategoryScalarFieldEnum>;
}
