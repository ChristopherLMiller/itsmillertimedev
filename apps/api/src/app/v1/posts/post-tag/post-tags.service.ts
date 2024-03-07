import { DB, PostTag } from "@itsmillertimedev/data";
import { Injectable, Logger } from "@nestjs/common";
import { Insertable, Kysely, Selectable, UpdateResult } from "kysely";
import { InjectKysely } from "nestjs-kysely";

@Injectable()
export class PostTagsService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  private readonly _logger = new Logger(PostTagsService.name);

  create(tag: PostTag): Promise<Insertable<PostTag>> {
    return this.db.insertInto("PostTag").values([tag]).returningAll().execute();
  }

  findAll(): Promise<Selectable<PostTag>[]> {
    return this.db.selectFrom("PostTag").selectAll().execute();
  }

  findOne(slug: string) {
    return this.db
      .selectFrom("PostTag")
      .where("PostTag.slug", "=", slug)
      .selectAll()
      .executeTakeFirst();
  }

  update(slug: string, updatePostTag: unknown): Promise<UpdateResult[]> {
    return this.db
      .updateTable("PostTag")
      .where("PostTag.slug", "=", slug)
      .set(updatePostTag)
      .execute();
  }

  remove(slug: string) {
    return this.db
      .deleteFrom("PostTag")
      .where("PostTag.slug", "=", slug)
      .execute();
  }
}
