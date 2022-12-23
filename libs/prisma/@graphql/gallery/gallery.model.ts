import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { GalleryCategory } from '../gallery-category/gallery-category.model';
import { GalleryTag } from '../gallery-tag/gallery-tag.model';
import { GalleryImage } from '../gallery-image/gallery-image.model';
import { GalleryCount } from './gallery-count.output';

@ObjectType()
export class Gallery {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    meta!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Visibility, {nullable:false,defaultValue:'PUBLIC'})
    visibility!: keyof typeof Visibility;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isNsfw!: boolean;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => [GalleryCategory], {nullable:true})
    categories?: Array<GalleryCategory>;

    @Field(() => [GalleryTag], {nullable:true})
    tags?: Array<GalleryTag>;

    @Field(() => [GalleryImage], {nullable:true})
    images?: Array<GalleryImage>;

    @Field(() => GalleryCount, {nullable:false})
    _count?: GalleryCount;
}
