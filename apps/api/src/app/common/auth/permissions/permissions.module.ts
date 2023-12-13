import { Module } from "@nestjs/common";
import { PermissionsController } from "./permissions.controller";
import { PermissionsService } from "./permissions.service";

@Module({
  imports: [],
  providers: [PermissionsService],
  exports: [],
  controllers: [PermissionsController],
})
export class PermissionsModule {}
