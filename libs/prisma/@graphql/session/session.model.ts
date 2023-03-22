import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Session {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sid!: string;

    @Field(() => String, {nullable:false})
    data!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date;
}
