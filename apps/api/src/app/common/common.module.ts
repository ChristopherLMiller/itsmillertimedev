import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { CachingModule } from "./cache/cache.module";
import { HealthController } from "./health/health.controller";
import { PrismaModule } from "./prisma/prisma.module";
import { SettingsModule } from "./settings/settings.module";

@Module({
  imports: [AuthModule, PrismaModule, SettingsModule, CachingModule],
  exports: [],
  controllers: [HealthController],
})
export class CommonModule {}
