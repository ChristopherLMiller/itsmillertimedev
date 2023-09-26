import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Model } from '../model/model.model';

@ObjectType()
export class ModelTags {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:true})
    modelId!: number | null;

    @Field(() => Model, {nullable:true})
    Model?: Model | null;
}
