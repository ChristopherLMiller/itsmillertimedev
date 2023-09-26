import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutTagsInput } from './post-create-without-tags.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutTagsInput } from './post-create-or-connect-without-tags.input';
import { PostUpsertWithWhereUniqueWithoutTagsInput } from './post-upsert-with-where-unique-without-tags.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithWhereUniqueWithoutTagsInput } from './post-update-with-where-unique-without-tags.input';
import { PostUpdateManyWithWhereWithoutTagsInput } from './post-update-many-with-where-without-tags.input';
import { PostScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class PostUncheckedUpdateManyWithoutTagsNestedInput {

    @Field(() => [PostCreateWithoutTagsInput], {nullable:true})
    @Type(() => PostCreateWithoutTagsInput)
    create?: Array<PostCreateWithoutTagsInput>;

    @Field(() => [PostCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutTagsInput>;

    @Field(() => [PostUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutTagsInput>;

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

    @Field(() => [PostUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [PostUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}
