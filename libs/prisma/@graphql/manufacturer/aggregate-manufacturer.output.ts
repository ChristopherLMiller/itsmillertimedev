import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ManufacturerCountAggregate } from './manufacturer-count-aggregate.output';
import { ManufacturerAvgAggregate } from './manufacturer-avg-aggregate.output';
import { ManufacturerSumAggregate } from './manufacturer-sum-aggregate.output';
import { ManufacturerMinAggregate } from './manufacturer-min-aggregate.output';
import { ManufacturerMaxAggregate } from './manufacturer-max-aggregate.output';

@ObjectType()
export class AggregateManufacturer {

    @Field(() => ManufacturerCountAggregate, {nullable:true})
    _count?: ManufacturerCountAggregate;

    @Field(() => ManufacturerAvgAggregate, {nullable:true})
    _avg?: ManufacturerAvgAggregate;

    @Field(() => ManufacturerSumAggregate, {nullable:true})
    _sum?: ManufacturerSumAggregate;

    @Field(() => ManufacturerMinAggregate, {nullable:true})
    _min?: ManufacturerMinAggregate;

    @Field(() => ManufacturerMaxAggregate, {nullable:true})
    _max?: ManufacturerMaxAggregate;
}
