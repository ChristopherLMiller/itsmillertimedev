import { ExpressionBuilder } from "kysely";
import { jsonObjectFrom } from "kysely/helpers/postgres";
import { DB } from "./generated/types";

export function withCategory(eb: ExpressionBuilder<DB, "Post">) {
  return jsonObjectFrom(
    eb
      .selectFrom("PostCategory")
      .selectAll()
      .whereRef("Post.postCategoryId", "=", "PostCategory.id"),
  ).as("category");
}
