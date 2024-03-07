import { DB, PostCategory } from "@itsmillertimedev/data";
import { Injectable } from "@nestjs/common";
import {
  DeleteResult,
  Insertable,
  Kysely,
  Selectable,
  UpdateObject,
  UpdateResult,
} from "kysely";
import { InjectKysely } from "nestjs-kysely";

@Injectable()
export class PostCategoriesService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  async create(
    postCategories: Insertable<PostCategory>,
  ): Promise<Insertable<PostCategory>> {
    return this.db
      .insertInto("PostCategory")
      .values([postCategories])
      .returningAll()
      .execute();
  }

  /**
   * Retrieve all post categories from the database
   * @returns A promise that resolves with an array of selectable post categories
   */
  async findAll(): Promise<Selectable<PostCategory>[]> {
    return this.db.selectFrom("PostCategory").selectAll().execute();
  }

  /**
   * Find one post category by slug.
   *
   * @param {string} slug - The slug of the post category to find
   * @return {Promise<Selectable<PostCategory>>} A promise that resolves to the first post category found
   */
  findOne(slug: string): Promise<Selectable<PostCategory>> {
    return this.db
      .selectFrom("PostCategory")
      .where("PostCategory.slug", "=", slug)
      .selectAll()
      .executeTakeFirst();
  }

  update(
    slug: string,
    updatePostCategory: UpdateObject<DB, "PostCategory">,
  ): Promise<UpdateResult[]> {
    return this.db
      .updateTable("PostCategory")
      .where("PostCategory.slug", "=", slug)
      .set(updatePostCategory)
      .execute();
  }

  remove(slug: string): Promise<DeleteResult[]> {
    return this.db
      .deleteFrom("PostCategory")
      .where("PostCategory.slug", "=", slug)
      .execute();
  }
}
