import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScaleCreateWithoutModelInput } from './scale-create-without-model.input';
import { Type } from 'class-transformer';
import { ScaleCreateOrConnectWithoutModelInput } from './scale-create-or-connect-without-model.input';
import { ScaleUpsertWithoutModelInput } from './scale-upsert-without-model.input';
import { Prisma } from '@prisma/client';
import { ScaleWhereUniqueInput } from './scale-where-unique.input';
import { ScaleUpdateToOneWithWhereWithoutModelInput } from './scale-update-to-one-with-where-without-model.input';

@InputType()
export class ScaleUpdateOneRequiredWithoutModelNestedInput {

    @Field(() => ScaleCreateWithoutModelInput, {nullable:true})
    @Type(() => ScaleCreateWithoutModelInput)
    create?: ScaleCreateWithoutModelInput;

    @Field(() => ScaleCreateOrConnectWithoutModelInput, {nullable:true})
    @Type(() => ScaleCreateOrConnectWithoutModelInput)
    connectOrCreate?: ScaleCreateOrConnectWithoutModelInput;

    @Field(() => ScaleUpsertWithoutModelInput, {nullable:true})
    @Type(() => ScaleUpsertWithoutModelInput)
    upsert?: ScaleUpsertWithoutModelInput;

    @Field(() => ScaleWhereUniqueInput, {nullable:true})
    @Type(() => ScaleWhereUniqueInput)
    connect?: Prisma.AtLeast<ScaleWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ScaleUpdateToOneWithWhereWithoutModelInput, {nullable:true})
    @Type(() => ScaleUpdateToOneWithWhereWithoutModelInput)
    update?: ScaleUpdateToOneWithWhereWithoutModelInput;
}
