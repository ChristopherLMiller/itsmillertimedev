import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { GithubController } from "./github.controller";
import { GithubService } from "./github.service";

@Module({
  controllers: [GithubController],
  imports: [
    HttpModule.register({
      baseURL: "https://api.github.com",
    }),
  ],
  providers: [GithubService],
})
export class GithubModule {}
