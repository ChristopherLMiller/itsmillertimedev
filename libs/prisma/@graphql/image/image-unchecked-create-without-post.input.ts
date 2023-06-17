import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PageUncheckedCreateNestedManyWithoutFeaturedImageInput } from '../page/page-unchecked-create-nested-many-without-featured-image.input';

@InputType()
export class ImageUncheckedCreateWithoutPostInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    public_id!: string;

    @Field(() => Int, {nullable:true})
    version?: number;

    @Field(() => String, {nullable:true})
    format?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    secureUrl?: string;

    @Field(() => String, {nullable:true})
    alt?: string;

    @Field(() => String, {nullable:true})
    caption?: string;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Int, {nullable:true})
    bytes?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    thumbnail?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    exif?: any;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PageUncheckedCreateNestedManyWithoutFeaturedImageInput, {nullable:true})
    Page?: PageUncheckedCreateNestedManyWithoutFeaturedImageInput;

    @Field(() => Int, {nullable:true})
    modelId?: number;
}
