import { Global, Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

@Global()
@Module({
  controllers: [SettingsController],
  imports: [],
  providers: [SettingsService],
  exports: [SettingsService],
})
export class SettingsModule {}
