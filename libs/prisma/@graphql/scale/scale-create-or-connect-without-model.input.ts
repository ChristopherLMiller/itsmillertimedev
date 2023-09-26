import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScaleWhereUniqueInput } from './scale-where-unique.input';
import { Type } from 'class-transformer';
import { ScaleCreateWithoutModelInput } from './scale-create-without-model.input';

@InputType()
export class ScaleCreateOrConnectWithoutModelInput {

    @Field(() => ScaleWhereUniqueInput, {nullable:false})
    @Type(() => ScaleWhereUniqueInput)
    where!: Prisma.AtLeast<ScaleWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ScaleCreateWithoutModelInput, {nullable:false})
    @Type(() => ScaleCreateWithoutModelInput)
    create!: ScaleCreateWithoutModelInput;
}
