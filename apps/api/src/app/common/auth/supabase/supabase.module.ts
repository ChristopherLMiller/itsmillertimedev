import { Module } from "@nestjs/common";
import { SupabaseController } from "./supabase.controller";
import { SupabaseService } from "./supabase.service";

@Module({
  imports: [],
  providers: [SupabaseService],
  exports: [],
  controllers: [SupabaseController],
})
export class SupabaseModule {}
