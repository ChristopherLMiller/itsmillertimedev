import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationStatus } from '../prisma/publication-status.enum';
import { Visibility } from '../prisma/visibility.enum';
import { GalleryCreateNestedManyWithoutImagesInput } from '../gallery/gallery-create-nested-many-without-images.input';

@InputType()
export class GalleryImageCreateInput {

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

    @Field(() => GalleryCreateNestedManyWithoutImagesInput, {nullable:true})
    galleries?: GalleryCreateNestedManyWithoutImagesInput;
}
