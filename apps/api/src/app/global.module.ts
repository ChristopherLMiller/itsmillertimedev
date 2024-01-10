//import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { ClsModule } from "nestjs-cls";
import { ComboAuthGuard } from "../common/guards/ComboAuth.guard";
import { ApiKeyAuthGuard } from "../common/guards/apiKeyAuth.guard";
import { SupabaseAuthGuard } from "../common/guards/supabaseAuth.guard";
import { LoggingInterceptor } from "../common/interceptors/logging.interceptor";
import { ResponseInterceptor } from "../common/interceptors/response.interceptor";
import { CommonModule } from "./common/common.module";
import { V1Module } from "./v1/v1.module";

@Module({
  controllers: [],
  imports: [
    V1Module,
    CommonModule,
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
        setup: (cls, req) => {
          if (req.headers["authorization"]) {
            cls.set("bearer_token", req.headers["authorization"]);
          }
        },
      },
    }),
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
