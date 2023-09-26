import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScaleCreateWithoutModelInput } from './scale-create-without-model.input';
import { Type } from 'class-transformer';
import { ScaleCreateOrConnectWithoutModelInput } from './scale-create-or-connect-without-model.input';
import { Prisma } from '@prisma/client';
import { ScaleWhereUniqueInput } from './scale-where-unique.input';

@InputType()
export class ScaleCreateNestedOneWithoutModelInput {

    @Field(() => ScaleCreateWithoutModelInput, {nullable:true})
    @Type(() => ScaleCreateWithoutModelInput)
    create?: ScaleCreateWithoutModelInput;

    @Field(() => ScaleCreateOrConnectWithoutModelInput, {nullable:true})
    @Type(() => ScaleCreateOrConnectWithoutModelInput)
    connectOrCreate?: ScaleCreateOrConnectWithoutModelInput;

    @Field(() => ScaleWhereUniqueInput, {nullable:true})
    @Type(() => ScaleWhereUniqueInput)
    connect?: Prisma.AtLeast<ScaleWhereUniqueInput, 'id' | 'slug'>;
}
