import { ExpressionBuilder, ReferenceExpression } from "kysely";
import { jsonObjectFrom } from "kysely/helpers/postgres";
import { DB } from "./generated/types";

export function withTags<T extends keyof DB>(
  eb: ExpressionBuilder<DB, "Post">, //T | "PostTag" | "Post" | "_PostToTag">,
  refTable: ReferenceExpression<DB, T | "_PostToTag" | "Post">,
) {
  return jsonObjectFrom(
    eb
      .selectFrom("_PostToTag")
      .whereRef(refTable as any, "=", "_PostToTag.A")
      .innerJoin("PostTag", "_PostToTag.B", "PostTag.id")
      .selectAll(),
  ).as("tags");
}
