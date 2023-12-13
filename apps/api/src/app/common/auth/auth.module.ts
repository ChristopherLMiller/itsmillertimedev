import { Global, Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PermissionsModule } from "./permissions/permissions.module";
import { SupabaseModule } from "./supabase/supabase.module";

@Global()
@Module({
  imports: [PermissionsModule, SupabaseModule],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [],
})
export class AuthModule {}
