import { Global, Module } from "@nestjs/common";
import { SupabaseController } from "./supabase.controller";
import { SupabaseService } from "./supabase.service";

@Global()
@Module({
  imports: [],
  providers: [SupabaseService],
  exports: [SupabaseService],
  controllers: [SupabaseController],
})
export class SupabaseModule {}
