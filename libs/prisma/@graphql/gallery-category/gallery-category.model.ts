import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Gallery } from '../gallery/gallery.model';

@ObjectType()
export class GalleryCategory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:true})
    galleryId!: number | null;

    @Field(() => Gallery, {nullable:true})
    Gallery?: Gallery | null;
}
