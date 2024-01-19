import { Controller, Get } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
  PrismaHealthIndicator,
} from "@nestjs/terminus";
import { IgnoreLogging } from "../../../common/decorators/logging.decorator";
import { PrismaService } from "../prisma/prisma.service";

@Controller({ path: "health" })
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private memory: MemoryHealthIndicator,
    private prismaHealth: PrismaHealthIndicator,
    private prisma: PrismaService,
  ) {}

  @Get("/status")
  @ApiOperation({ description: "Get the stauts of the server" })
  @IgnoreLogging()
  getAppStatus() {
    const healthcheck = {
      uptime: process.uptime(),
      responseTime: process.hrtime(),
      message: "ok",
      timestamp: Date.now(),
    };

    return { data: healthcheck };
  }

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck("nestjs-docs", "https://docs.nestjs.com"),
      () => this.memory.checkHeap("memory_heap", 158 * 1024 * 1024),
      () => this.prismaHealth.pingCheck("prisma", this.prisma),
    ]);
  }
}
