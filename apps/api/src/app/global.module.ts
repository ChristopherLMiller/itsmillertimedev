//import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { ClsModule } from "nestjs-cls";
import { ComboAuthGuard } from "../common/guards/ComboAuth.guard";
import { ApiKeyAuthGuard } from "../common/guards/apiKeyAuth.guard";
import { SupabaseAuthGuard } from "../common/guards/supabaseAuth.guard";
import { LoggingInterceptor } from "../common/interceptors/logging.interceptor";
import { ResponseInterceptor } from "../common/interceptors/response.interceptor";
import { SupabaseService } from "./common/auth/supabase/supabase.service";
import { CommonModule } from "./common/common.module";
import { V1Module } from "./v1/v1.module";

@Module({
  controllers: [],
  imports: [
    CommonModule,
    ClsModule.forRootAsync({
      global: true,
      inject: [SupabaseService],
      useFactory: (supabaseService: SupabaseService) => ({
        middleware: {
          mount: true,
          setup: async (cls, req) => {
            if (req.headers["authorization"]) {
              const supabaseUser = await supabaseService.getUser(
                req.headers["authorization"].split(" ")[1],
              );
              cls.set("SUPABASE_USER", supabaseUser);
              cls.set("BEARER_TOKEN", req.headers["authorization"]);
            }
          },
        },
      }),
    }),
    V1Module,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: ComboAuthGuard,
    },
    ApiKeyAuthGuard,
    SupabaseAuthGuard,
  ],
})
export class GlobalModule {}
