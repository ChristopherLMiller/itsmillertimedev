import { Global, Module } from "@nestjs/common";
import { PermissionsModule } from "./permissions/permissions.module";
import { SupabaseModule } from "./supabase/supabase.module";
import { UserProfilesModule } from "./userProfiles/userProfiles.module";

@Global()
@Module({
  imports: [PermissionsModule, UserProfilesModule, SupabaseModule],
  providers: [],
  exports: [],
  controllers: [],
})
export class AuthModule {}
