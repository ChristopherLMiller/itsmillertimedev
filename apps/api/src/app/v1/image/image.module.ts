import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  imports: [HttpModule, CacheModule.register()],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
