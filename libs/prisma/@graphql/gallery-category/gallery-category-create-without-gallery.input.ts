import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GalleryCategoryCreateWithoutGalleryInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;
}
