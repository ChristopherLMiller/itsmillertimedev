import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { HealthController } from './health/health.controller';
import { PrismaModule } from './prisma/prisma.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [AuthModule, PrismaModule, SettingsModule],
  exports: [AuthModule, PrismaModule, SettingsModule],
  controllers: [HealthController],
})
export class CommonModule {}
