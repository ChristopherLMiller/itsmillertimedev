import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostTagCreateWithoutPostsInput } from './post-tag-create-without-posts.input';
import { Type } from 'class-transformer';
import { PostTagCreateOrConnectWithoutPostsInput } from './post-tag-create-or-connect-without-posts.input';
import { PostTagUpsertWithWhereUniqueWithoutPostsInput } from './post-tag-upsert-with-where-unique-without-posts.input';
import { Prisma } from '@prisma/client';
import { PostTagWhereUniqueInput } from './post-tag-where-unique.input';
import { PostTagUpdateWithWhereUniqueWithoutPostsInput } from './post-tag-update-with-where-unique-without-posts.input';
import { PostTagUpdateManyWithWhereWithoutPostsInput } from './post-tag-update-many-with-where-without-posts.input';
import { PostTagScalarWhereInput } from './post-tag-scalar-where.input';

@InputType()
export class PostTagUncheckedUpdateManyWithoutPostsNestedInput {

    @Field(() => [PostTagCreateWithoutPostsInput], {nullable:true})
    @Type(() => PostTagCreateWithoutPostsInput)
    create?: Array<PostTagCreateWithoutPostsInput>;

    @Field(() => [PostTagCreateOrConnectWithoutPostsInput], {nullable:true})
    @Type(() => PostTagCreateOrConnectWithoutPostsInput)
    connectOrCreate?: Array<PostTagCreateOrConnectWithoutPostsInput>;

    @Field(() => [PostTagUpsertWithWhereUniqueWithoutPostsInput], {nullable:true})
    @Type(() => PostTagUpsertWithWhereUniqueWithoutPostsInput)
    upsert?: Array<PostTagUpsertWithWhereUniqueWithoutPostsInput>;

    @Field(() => [PostTagWhereUniqueInput], {nullable:true})
    @Type(() => PostTagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PostTagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PostTagWhereUniqueInput], {nullable:true})
    @Type(() => PostTagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PostTagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PostTagWhereUniqueInput], {nullable:true})
    @Type(() => PostTagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PostTagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PostTagWhereUniqueInput], {nullable:true})
    @Type(() => PostTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostTagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [PostTagUpdateWithWhereUniqueWithoutPostsInput], {nullable:true})
    @Type(() => PostTagUpdateWithWhereUniqueWithoutPostsInput)
    update?: Array<PostTagUpdateWithWhereUniqueWithoutPostsInput>;

    @Field(() => [PostTagUpdateManyWithWhereWithoutPostsInput], {nullable:true})
    @Type(() => PostTagUpdateManyWithWhereWithoutPostsInput)
    updateMany?: Array<PostTagUpdateManyWithWhereWithoutPostsInput>;

    @Field(() => [PostTagScalarWhereInput], {nullable:true})
    @Type(() => PostTagScalarWhereInput)
    deleteMany?: Array<PostTagScalarWhereInput>;
}
