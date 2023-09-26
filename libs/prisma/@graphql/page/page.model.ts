import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Image } from '../image/image.model';

@ObjectType()
export class Page {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    summary!: string;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    imagePublic_id!: string | null;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => Image, {nullable:true})
    featuredImage?: Image | null;
}
