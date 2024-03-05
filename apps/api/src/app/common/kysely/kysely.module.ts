import { Global, Module } from "@nestjs/common";
import { PostgresDialect } from "kysely";
import { KyselyModule } from "nestjs-kysely";
import { Pool } from "pg";

@Global()
@Module({
  imports: [
    KyselyModule.forRoot({
      dialect: new PostgresDialect({
        pool: new Pool({
          database: "postgres",
          host: "aws-0-us-east-1.pooler.supabase.com",
          user: "postgres.jvhdgskxlevrvqfzanen",
          password: "ElcuwEQINWQVBj7K",
          port: 6543,
          max: 10,
        }),
      }),
    }),
  ],
})
export class KyselyDBModule {}
