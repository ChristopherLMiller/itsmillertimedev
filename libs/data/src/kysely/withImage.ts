import {
  ExpressionBuilder,
  ReferenceExpression,
  SelectExpression,
} from "kysely";
import { jsonObjectFrom } from "kysely/helpers/postgres";
import { DB } from "./generated/types";
export function withImage<T extends keyof DB>(
  eb: ExpressionBuilder<DB, "Post">,
  refTable: ReferenceExpression<DB, T | "Image">,
  selectFields?: SelectExpression<DB, "Image">[],
) {
  // If selectFields is undefined we return all fields, if we pass in certain fields we only want to retun those
  if (selectFields !== undefined) {
    return jsonObjectFrom(
      eb
        .selectFrom("Image")
        .$if(selectFields !== null && selectFields !== undefined, (qb) =>
          qb.select(selectFields),
        )
        .whereRef(refTable as any, "=", "Image.public_id"),
    ).as("featuredImage");
  } else {
    return jsonObjectFrom(
      eb
        .selectFrom("Image")
        .$if(selectFields !== null && selectFields !== undefined, (qb) =>
          qb.selectAll(),
        )
        .whereRef("Post.imagePublic_id", "=", "Image.public_id"),
    ).as("featuredImage");
  }
}
