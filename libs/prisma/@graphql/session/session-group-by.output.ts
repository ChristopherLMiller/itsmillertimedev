import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SessionCountAggregate } from './session-count-aggregate.output';
import { SessionMinAggregate } from './session-min-aggregate.output';
import { SessionMaxAggregate } from './session-max-aggregate.output';

@ObjectType()
export class SessionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sid!: string;

    @Field(() => String, {nullable:false})
    data!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => SessionCountAggregate, {nullable:true})
    _count?: SessionCountAggregate;

    @Field(() => SessionMinAggregate, {nullable:true})
    _min?: SessionMinAggregate;

    @Field(() => SessionMaxAggregate, {nullable:true})
    _max?: SessionMaxAggregate;
}
