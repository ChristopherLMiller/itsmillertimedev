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
          database: process.env.SUPABASE_DATABASE,
          host: process.env.SUPABASE_HOST,
          user: process.env.SUPABASE_USER,
          password: process.env.SUPABASE_PASSWORD,
          port: process.env.SUPABASE_PORT,
          max: 10,
        }),
      }),
    }),
  ],
})
export class KyselyDBModule {}

// ElcuwEQINWQVBj7K
