import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PublicationStatus } from '../prisma/publication-status.enum';
import { Visibility } from '../prisma/visibility.enum';

@ObjectType()
export class GalleryImageMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => PublicationStatus, {nullable:true})
    published?: keyof typeof PublicationStatus;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => String, {nullable:true})
    url?: string;
}
