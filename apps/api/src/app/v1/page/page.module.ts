import { CacheModule, Module } from '@nestjs/common';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { PageController } from './page.controller';
import { PageService } from './page.service';

@Module({
  controllers: [PageController],
  providers: [PageService],
  imports: [CacheModule.register(), PrismaModule],
})
export class PageModule {}
