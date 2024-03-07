import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { CachingModule } from "./cache/cache.module";
import { HealthModule } from "./health/health.module";
import { KyselyDBModule } from "./kysely/kysely.module";
import { SettingsModule } from "./settings/settings.module";

@Module({
  imports: [
    AuthModule,
    KyselyDBModule,
    SettingsModule,
    CachingModule,
    HealthModule,
  ],
  exports: [],
  controllers: [],
})
export class CommonModule {}
