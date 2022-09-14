import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GraphqlController } from './graphql.controller';
import { GraphqlService } from './graphql.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://admin.christopherleemiller.me',
    }),
  ],
  controllers: [GraphqlController],
  providers: [GraphqlService],
})
export class GraphqlModule {}
