import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Sentry from '@sentry/node';
import helmet from 'helmet';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';
import { createLogger } from 'winston';
import { GlobalModule } from './app/global.module';
import { SentryInterceptor } from './common/interceptors/sentry.interceptor';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageData = require('../../../package.json');

async function bootstrap() {
  // Create an instance of Winston
  const winstonInstance = createLogger({
    transports: [
      new winston.transports.Console({
        level: 'debug',
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          winston.format.colorize(),
          nestWinstonModuleUtilities.format.nestLike('API', {
            colors: true,
            prettyPrint: true,
          }),
        ),
      }),
    ],
  });

  // Create Sentry
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    release: packageData.version,
    environment: process.env.ENVIRONMENT,
    ignoreErrors: [
      'UnsupportedMediaTypeException: No Exif segment found in the given image.',
    ],
  });

  // Create the Nest App
  const app = await NestFactory.create(GlobalModule, {
    bufferLogs: true,
    snapshot: true,
    logger: WinstonModule.createLogger({ instance: winstonInstance }),
  });

  //Register global pieces
  app.useGlobalInterceptors(new SentryInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  // Setup Swagger
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Its Miller Time - Dev API')
    .setDescription('API Docs for all itsmillertime.dev sites')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, swaggerDocument);

  // Enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Use CORS
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS,
  });

  // Add Helmet
  app.use(helmet());

  // Start the application
  await app.listen(process.env.PORT, '0.0.0.0');
  winstonInstance.info(`🚀 Application is running on: ${await app.getUrl()}`);

  app.enableShutdownHooks();
}

bootstrap();
