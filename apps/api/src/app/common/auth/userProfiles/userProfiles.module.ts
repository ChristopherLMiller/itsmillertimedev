import { Global, Module } from "@nestjs/common";
import { UserProfilesController } from "./userProfiles.controller";
import { UserProfilesService } from "./userProfiles.service";

@Global()
@Module({
  imports: [],
  providers: [UserProfilesService],
  exports: [UserProfilesService],
  controllers: [UserProfilesController],
})
export class UserProfilesModule {}
