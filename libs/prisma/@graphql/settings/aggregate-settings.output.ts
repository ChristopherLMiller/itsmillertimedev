import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SettingsCountAggregate } from './settings-count-aggregate.output';
import { SettingsAvgAggregate } from './settings-avg-aggregate.output';
import { SettingsSumAggregate } from './settings-sum-aggregate.output';
import { SettingsMinAggregate } from './settings-min-aggregate.output';
import { SettingsMaxAggregate } from './settings-max-aggregate.output';

@ObjectType()
export class AggregateSettings {

    @Field(() => SettingsCountAggregate, {nullable:true})
    _count?: SettingsCountAggregate;

    @Field(() => SettingsAvgAggregate, {nullable:true})
    _avg?: SettingsAvgAggregate;

    @Field(() => SettingsSumAggregate, {nullable:true})
    _sum?: SettingsSumAggregate;

    @Field(() => SettingsMinAggregate, {nullable:true})
    _min?: SettingsMinAggregate;

    @Field(() => SettingsMaxAggregate, {nullable:true})
    _max?: SettingsMaxAggregate;
}
