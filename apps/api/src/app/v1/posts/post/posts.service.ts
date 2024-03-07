import {
  DB,
  Post,
  withCategory,
  withImage,
  withTags,
} from "@itsmillertimedev/data";
import { countWords } from "@itsmillertimedev/utility-functions";
import { Injectable, Logger } from "@nestjs/common";
import { Insertable, Kysely, Selectable } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { SupabaseService } from "../../../common/auth/supabase/supabase.service";

@Injectable()
export class PostsService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private supabaseService: SupabaseService,
  ) {}
  private readonly _logger = new Logger(PostsService.name);

  async create(newData: Insertable<Post>): Promise<Insertable<Post>> {
    const wordCount = newData.content && countWords(newData.content);
    return this.db
      .insertInto("Post")
      .values([{ ...newData, wordCount }])
      .returningAll()
      .execute();
  }

  async findAll(params: any): Promise<unknown> {
    const limit = +params.limit || 10;
    const sortField = params.orderBy || "publishedAt";
    const sortDirection = params.orderDirection || "desc";
    const relatedFields = params.include ? params.include.split(",") : null;

    // setup the initial query
    const query = this.db
      .selectFrom("Post")
      .limit(limit)
      .orderBy(sortField, sortDirection)
      .$if(params.skip && params.skip > 0, (qb) =>
        qb.offset(parseInt(params.skip)),
      )
      .$if(relatedFields && relatedFields.includes("tags"), (qb) =>
        qb.select((eb) => [withTags(eb, "Post.id")]),
      )
      .$if(relatedFields && relatedFields.includes("category"), (qb) =>
        qb.select((eb) => [withCategory(eb)]),
      )
      .select((eb) =>
        withImage<"Post">(eb, "Post.imagePublic_id", [
          "Image.alt",
          "Image.public_id",
          "Image.caption",
        ]),
      )
      .$if(params.fields !== undefined, (qb) =>
        qb.select(params.fields.split(",")),
      )
      .$if(params.fields === undefined, (qb) => qb.selectAll());

    return query.execute();
  }

  findOne(id: string): Promise<Selectable<Post>> {
    // To decide if its slug or id, lets see if we can parse it as an int
    if (isNaN(parseInt(id))) {
      return this.db
        .selectFrom("Post")
        .where("slug", "=", id)
        .select((eb) => [
          withCategory(eb),
          withTags(eb, "Post.id"),
          withImage(eb, "Post.imagePublic_id"),
        ])
        .selectAll()
        .executeTakeFirst();
    } else {
      return this.db
        .selectFrom("Post")
        .where("id", "=", +id)
        .select((eb) => [
          withCategory(eb),
          withTags(eb, "Post.id"),
          withImage(eb, "Post.imagePublic_id"),
        ])
        .selectAll()
        .executeTakeFirst();
    }
  }
}
