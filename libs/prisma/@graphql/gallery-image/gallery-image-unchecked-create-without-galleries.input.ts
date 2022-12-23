import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PublicationStatus } from '../prisma/publication-status.enum';
import { Visibility } from '../prisma/visibility.enum';

@InputType()
export class GalleryImageUncheckedCreateWithoutGalleriesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => PublicationStatus, {nullable:false})
    published!: keyof typeof PublicationStatus;

    @Field(() => Date, {nullable:false})
    publishedAt!: Date | string;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => String, {nullable:false})
    url!: string;
}
