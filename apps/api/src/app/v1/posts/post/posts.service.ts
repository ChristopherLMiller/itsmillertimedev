import { DB, Post, withCategory, withImage } from "@itsmillertimedev/data";
import { countWords } from "@itsmillertimedev/utility-functions";
import { Injectable, Logger } from "@nestjs/common";
import { Insertable, Kysely, Selectable } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { FilterDTO } from "../../../../common/dtos/common/filter.dto";
import { SupabaseService } from "../../../common/auth/supabase/supabase.service";
import { UserProfilesService } from "../../../common/auth/userProfiles/userProfiles.service";

@Injectable()
export class PostsService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private supabaseService: SupabaseService,
    private readonly userProfileService: UserProfilesService,
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

  async findAll(params: FilterDTO): Promise<any> {
    const limit = +params.limit || 10;
    const skip = +params.skip || 0;
    const sortField = params.orderBy || "publishedAt";
    const sortDirection = params.orderDirection || "desc";
    const relatedFields = params.include ? params.include.split(",") : null;
    let publicationState: "published" | "all" = "published";
    const user = await this.supabaseService.getUserFromRequest();

    // Work on the where clause
    const where = (params.where && JSON.parse(params.where)) || {};
    let categoryId = undefined;

    // Check user and determine what post visibility they have
    if (user !== null) {
      const userRole = await this.userProfileService.getUserRole(user.id);
      if (userRole === 1) {
        publicationState = "all";
      } else {
        publicationState = "published";
      }
    }

    // Lets fetch the id of the where category
    if (
      Object.keys(where).includes("category") &&
      Object.keys(where["category"]).includes("slug")
    ) {
      const category = await this.db
        .selectFrom("PostCategory")
        .where("PostCategory.slug", "=", where["category"]["slug"])
        .selectAll()
        .executeTakeFirst();

      categoryId = category.id;
    }

    // setup the initial query
    const query = this.db
      .selectFrom("Post")
      .limit(limit)
      .orderBy(sortField, sortDirection)
      .$if(skip > 0, (qb) => qb.offset(skip))
      .$if(relatedFields && relatedFields.includes("category"), (qb) =>
        qb.select((eb) => [withCategory(eb)]),
      )
      .select((eb) => [
        withImage<"Post">(eb, "Post.imagePublic_id", [
          "Image.alt",
          "Image.public_id",
          "Image.caption",
        ]),
      ])
      .$if(params.fields !== undefined, (qb) =>
        qb.select(params.fields.split(",")),
      )
      .$if(params.fields === undefined, (qb) => qb.selectAll())
      .$if(categoryId !== undefined, (qb) =>
        qb.where("Post.postCategoryId", "=", categoryId),
      )
      .$if(user === null || publicationState === "published", (qb) =>
        qb.where("published", "=", true),
      );

    const data = await query.execute();

    const countQuery = await this.db
      .selectFrom("Post")
      .$if(categoryId !== undefined, (qb) =>
        qb.where("Post.postCategoryId", "=", categoryId),
      )
      .$if(user === null || publicationState === "published", (qb) =>
        qb.where("published", "=", true),
      )
      .select(({ fn }) => [fn.count<number>("Post.id").as("total")])
      .execute();

    return { data, meta: { total: countQuery[0].total } };
  }

  findOne(id: string): Promise<Selectable<Post>> {
    // To decide if its slug or id, lets see if we can parse it as an int
    if (isNaN(parseInt(id))) {
      return this.db
        .selectFrom("Post")
        .where("slug", "=", id)
        .select((eb) => [
          withCategory(eb),
          withImage<"Post">(eb, "Post.imagePublic_id", [
            "Image.alt",
            "Image.public_id",
            "Image.caption",
          ]),
        ])
        .selectAll()
        .executeTakeFirst();
    } else {
      return this.db
        .selectFrom("Post")
        .where("id", "=", +id)
        .select((eb) => [
          withCategory(eb),
          withImage<"Post">(eb, "Post.imagePublic_id", [
            "Image.alt",
            "Image.public_id",
            "Image.caption",
          ]),
        ])
        .selectAll()
        .executeTakeFirst();
    }
  }
}
