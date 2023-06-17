import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Model } from '../model/model.model';
import { ManufacturerCount } from './manufacturer-count.output';

@ObjectType()
export class Manufacturer {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => [Model], {nullable:true})
    Model?: Array<Model>;

    @Field(() => ManufacturerCount, {nullable:false})
    _count?: ManufacturerCount;
}
