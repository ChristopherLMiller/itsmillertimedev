import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { BasicAuthGuard } from '../../../guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../interceptors/responseTransform.interceptor';
import { GraphqlService } from './graphql.service';

@Controller({ version: '1', path: 'graphql' })
@ApiTags('GraphQL')
@ApiSecurity('x-api-key')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor)
export class GraphqlController {
  constructor(private graphql: GraphqlService) {}

  @Post('/')
  @HttpCode(200)
  @ApiOperation({ summary: 'GraphQL Introspection Query' })
  @ApiBody({
    type: 'string',
    required: true,
    description: 'GraphQL Query',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async graphqlIndex(@Body() body: any): Promise<any> {
    return this.graphql.query(body.query, body.variables);
  }
}
