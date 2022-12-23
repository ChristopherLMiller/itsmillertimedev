import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PublicationStatus } from '../prisma/publication-status.enum';
import { Visibility } from '../prisma/visibility.enum';
import { Gallery } from '../gallery/gallery.model';
import { GalleryImageCount } from './gallery-image-count.output';

@ObjectType()
export class GalleryImage {

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

    @Field(() => PublicationStatus, {nullable:false})
    published!: keyof typeof PublicationStatus;

    @Field(() => Date, {nullable:false})
    publishedAt!: Date;

    @Field(() => Visibility, {nullable:true})
    visibility!: keyof typeof Visibility | null;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => [Gallery], {nullable:true})
    galleries?: Array<Gallery>;

    @Field(() => GalleryImageCount, {nullable:false})
    _count?: GalleryImageCount;
}
