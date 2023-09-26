import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCategoryInput } from './post-create-without-category.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutCategoryInput } from './post-create-or-connect-without-category.input';
import { PostUpsertWithWhereUniqueWithoutCategoryInput } from './post-upsert-with-where-unique-without-category.input';
import { PostCreateManyCategoryInputEnvelope } from './post-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithWhereUniqueWithoutCategoryInput } from './post-update-with-where-unique-without-category.input';
import { PostUpdateManyWithWhereWithoutCategoryInput } from './post-update-many-with-where-without-category.input';
import { PostScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class PostUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [PostCreateWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoryInput)
    create?: Array<PostCreateWithoutCategoryInput>;

    @Field(() => [PostCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoryInput>;

    @Field(() => [PostUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => PostCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyCategoryInputEnvelope)
    createMany?: PostCreateManyCategoryInputEnvelope;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PostUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [PostUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}
