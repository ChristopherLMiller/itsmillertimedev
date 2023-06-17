import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ManufacturerCount {

    @Field(() => Int, {nullable:false})
    Model?: number;
}
