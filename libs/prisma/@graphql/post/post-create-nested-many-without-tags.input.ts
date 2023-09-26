import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutTagsInput } from './post-create-without-tags.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutTagsInput } from './post-create-or-connect-without-tags.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedManyWithoutTagsInput {

    @Field(() => [PostCreateWithoutTagsInput], {nullable:true})
    @Type(() => PostCreateWithoutTagsInput)
    create?: Array<PostCreateWithoutTagsInput>;

    @Field(() => [PostCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutTagsInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>>;
}
