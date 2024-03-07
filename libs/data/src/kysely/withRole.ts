import { ExpressionBuilder, ReferenceExpression } from "kysely";
import { jsonObjectFrom } from "kysely/helpers/postgres";
import { DB } from "./generated/types";

export function withRole<T extends keyof DB>(
  eb: ExpressionBuilder<DB, "UserProfile">,
  refTable: ReferenceExpression<DB, T | "Role">,
) {
  return jsonObjectFrom(
    eb
      .selectFrom("Role")
      .whereRef(refTable as any, "=", "Role.id")
      .selectAll(),
  ).as("role");
}
