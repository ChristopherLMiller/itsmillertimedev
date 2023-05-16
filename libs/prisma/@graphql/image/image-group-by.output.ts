import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ImageCountAggregate } from './image-count-aggregate.output';
import { ImageAvgAggregate } from './image-avg-aggregate.output';
import { ImageSumAggregate } from './image-sum-aggregate.output';
import { ImageMinAggregate } from './image-min-aggregate.output';
import { ImageMaxAggregate } from './image-max-aggregate.output';

@ObjectType()
export class ImageGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    thumbnail?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    exif?: any;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ImageCountAggregate, {nullable:true})
    _count?: ImageCountAggregate;

    @Field(() => ImageAvgAggregate, {nullable:true})
    _avg?: ImageAvgAggregate;

    @Field(() => ImageSumAggregate, {nullable:true})
    _sum?: ImageSumAggregate;

    @Field(() => ImageMinAggregate, {nullable:true})
    _min?: ImageMinAggregate;

    @Field(() => ImageMaxAggregate, {nullable:true})
    _max?: ImageMaxAggregate;
}
