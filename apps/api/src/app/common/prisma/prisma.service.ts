import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { GenerateSlugMiddleware } from '../../../common/middleware/generateSlug.middleware';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'query' | 'error'>
  implements OnModuleInit
{
  private readonly _logger = new Logger(PrismaService.name);

  constructor() {
    super({ log: [{ emit: 'event', level: 'query' }] });

    this._logger.log(`Prisma v${Prisma.prismaVersion.client}`);
  }

  async onModuleInit(): Promise<void> {
    this.$on('error', (event) => {
      this._logger.log(event.target);
    });

    // lets log when in dev mode
    if (process.env.ENVIRONMENT === 'development') {
      this.$on('query', (e) => this._logger.debug(`${e.query} ${e.params}`));
    }

    // Register middleware here for our app
    this.$use(GenerateSlugMiddleware());

    try {
      await this.$connect();
    } catch (error) {
      if (error.errorCode === 'P10001') {
        this._logger.log(error);
        process.exit(1);
      } else {
        this._logger.log(error);
      }
    }
  }
}
