import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { config } from '../../../config';
import { GenerateSlugMiddleware } from '../middleware/GenerateSlugMiddlware';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'query' | 'error'>
  implements OnModuleInit
{
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({ log: [{ emit: 'event', level: 'query' }] });

    this.logger.log(`Prisma v${Prisma.prismaVersion.client}`);
  }

  async onModuleInit(): Promise<void> {
    this.$on('error', (event) => {
      this.logger.log(event.target);
    });

    // lets log when in dev mode
    if (config.general.isDev) {
      this.$on('query', (e) => this.logger.debug(`${e.query} ${e.params}`));
    }

    // Register middleware here for our app
    this.$use(GenerateSlugMiddleware());

    try {
      await this.$connect();
    } catch (error) {
      if (error.errorCode === 'P10001') {
        this.logger.log(error);
        process.exit(1);
      }
    }
  }

  async enableShutdownHooks(app: INestApplication): Promise<void> {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
