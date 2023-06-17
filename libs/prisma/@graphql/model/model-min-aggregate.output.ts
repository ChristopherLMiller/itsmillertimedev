import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';

@ObjectType()
export class ModelMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => String, {nullable:true})
    metaTitle?: string;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => String, {nullable:true})
    featuredImage?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    clockifyProjectId?: string;

    @Field(() => String, {nullable:true})
    contents?: string;

    @Field(() => Int, {nullable:true})
    yearReleased?: number;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => String, {nullable:true})
    imagePublic_id?: string;

    @Field(() => Int, {nullable:true})
    manufacturerId?: number;

    @Field(() => Int, {nullable:true})
    scaleId?: number;
}
