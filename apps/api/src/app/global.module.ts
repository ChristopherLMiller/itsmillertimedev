//import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { ClsModule } from "nestjs-cls";
import { ComboAuthGuard } from "../global/guards/ComboAuth.guard";
import { ApiKeyAuthGuard } from "../global/guards/apiKeyAuth.guard";
import { SupabaseAuthGuard } from "../global/guards/supabaseAuth.guard";
import { LoggingInterceptor } from "../global/interceptors/logging.interceptor";
import { ResponseInterceptor } from "../global/interceptors/response.interceptor";
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
              // Setup Async Local Storage with the supabase user
              cls.set("SUPABASE_USER", supabaseUser);
              cls.set("BEARER_TOKEN", req.headers["authorization"]);

              // Setup ALS with the API-KEY as well if present
              cls.set("X_API_KEY", req.headers["x-api-key"]);
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
