import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SettingsModule } from '../../settings/settings.module';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';

@Module({
  controllers: [GithubController],
  imports: [HttpModule, SettingsModule],
  providers: [GithubService],
})
export class GithubModule {}
