import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateNestedOneWithoutPageInput } from '../image/image-create-nested-one-without-page.input';

@InputType()
export class PageCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    summary!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => ImageCreateNestedOneWithoutPageInput, {nullable:true})
    featuredImage?: ImageCreateNestedOneWithoutPageInput;
}
