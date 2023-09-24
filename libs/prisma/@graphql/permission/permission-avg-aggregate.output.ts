import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PermissionAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;
}
