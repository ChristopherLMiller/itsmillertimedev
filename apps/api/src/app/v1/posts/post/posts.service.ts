import { DB, Post, withCategory, withImage } from "@itsmillertimedev/data";
import { countWords } from "@itsmillertimedev/utility-functions";
import { Injectable, Logger } from "@nestjs/common";
import { Insertable, Kysely, SelectExpression, Selectable } from "kysely";
import { UndirectedOrderByExpression } from "kysely/dist/cjs/parser/order-by-parser";
import { InjectKysely } from "nestjs-kysely";
import { FindPostsDTO } from "../../../../global/dtos/posts/find.dto";
import { PermissionsService } from "../../../common/auth/permissions/permissions.service";
import { SupabaseService } from "../../../common/auth/supabase/supabase.service";
import { UserProfilesService } from "../../../common/auth/userProfiles/userProfiles.service";
import { SettingsService } from "../../../common/settings/settings.service";

@Injectable()
export class PostsService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private supabaseService: SupabaseService,
    private readonly userProfileService: UserProfilesService,
    private readonly settings: SettingsService,
    private readonly permissionsServices: PermissionsService,
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

  async findAll(query: FindPostsDTO): Promise<any> {
    const limit =
      +query.limit ||
      (await this.settings.getFieldValue<number>("posts", "per-page"));
    const skip = +query.skip || 0;
    const sortField =
      query.orderBy ||
      (await this.settings.getFieldValue<
        UndirectedOrderByExpression<DB, "Post", unknown>
      >("posts", "field"));
    const sortDirection =
      query.orderDirection ||
      (await this.settings.getFieldValue("posts", "direction"));
    const relatedFields = query.include ? query.include.split(",") : null;
    let publicationState: "published" | "all" = "published";
    let categoryId = undefined;

    // Check what permissions the user has at this point, used to determine publication state
    const isAdmin = await this.permissionsServices.isAdmin();
    const user = await this.supabaseService.getUserFromRequest();

    this._logger.debug({ isAdmin: isAdmin, user: user });

    // Work on the where clause
    const where = (query.where && JSON.parse(query.where)) || {};

    // Check user and determine what post visibility they have
    /*if (user !== null) {
      const userRole = await this.userProfileService.getUserRole(user.id);
      if (userRole === 1) {
        publicationState = "all";
      } else {
        publicationState = "published";
      }
    }*/
    publicationState = isAdmin ? "all" : "published";

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

      // delet the category from the where clause, we don't need it any longer
      delete where.category;
    }

    // setup the initial query
    const DBquery = this.db
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
      .$if(where.slug !== undefined, (qb) =>
        qb.where("slug", "ilike", `%${where.slug}%`),
      )
      .$if(where.title !== undefined, (qb) =>
        qb.where("title", "ilike", `%${where.title}%`),
      )
      .$if(where.id !== undefined, (qb) => qb.where("id", "=", +where.id))
      .$if(query.fields !== undefined, (qb) =>
        qb.select(query.fields.split(",") as SelectExpression<DB, "Post">[]),
      )
      .$if(query.fields === undefined, (qb) => qb.selectAll())
      .$if(categoryId !== undefined, (qb) =>
        qb.where("Post.postCategoryId", "=", categoryId),
      )
      .$if(user === null || publicationState === "published", (qb) =>
        qb.where("published", "=", true),
      );

    const data = await DBquery.execute();

    const countQuery = await this.db
      .selectFrom("Post")
      .$if(categoryId !== undefined, (qb) =>
        qb.where("Post.postCategoryId", "=", categoryId),
      )
      .$if(user === null || publicationState === "published", (qb) =>
        qb.where("published", "=", true),
      )
      .$if(where.slug !== undefined, (qb) =>
        qb.where("slug", "ilike", `%${where.slug}%`),
      )
      .$if(where.title !== undefined, (qb) =>
        qb.where("title", "ilike", `%${where.title}%`),
      )
      .select(({ fn }) => [fn.count<number>("Post.id").as("total")])
      .execute();

    return { data, meta: { total: countQuery[0].total } };
  }

  async findOne(id: string): Promise<Selectable<Post>> {
    const where = isNaN(parseInt(id)) ? { slug: id } : { id };
    const result = await this.findAll({
      include: "category",
      where: JSON.stringify(where),
    });

    return result.data;
  }
}
