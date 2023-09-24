import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PermissionScalarWhereWithAggregatesInput {

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    node?: StringWithAggregatesFilter;
}
