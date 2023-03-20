import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Sentry from '@sentry/node';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import { createLogger } from 'winston';
import { config } from '../config';
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
          })
        ),
      }),
      new winston.transports.Http({
        level: 'warn',
        format: winston.format.json(),
      }),
    ],
  });

  // Create the Nest App
  const app = await NestFactory.create(GlobalModule, {
    bufferLogs: true,
    logger: WinstonModule.createLogger({ instance: winstonInstance }),
  });

  // Create Sentry
  Sentry.init({
    dsn: config.sentry.dsn,
    release: packageData.version,
    environment: config.general.environment,
    ignoreErrors: [
      'UnsupportedMediaTypeException: No Exif segment found in the given image.',
    ],
  });

  // Setup Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Its Miller Time - Dev API')
    .setDescription('API Docs for all itsmillertime.dev sites')
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'x-api-key', in: 'header' }, 'x-api-key')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, swaggerDocument);

  // Enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Use CORS
  app.enableCors({
    origin: config.general.allowedOrigins,
  });

  //Register global pieces
  app.useGlobalInterceptors(new SentryInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  // Start the application
  await app.listen(config.general.port, '0.0.0.0');
  winstonInstance.info(
    `🚀 Application is running on: http://localhost:${config.general.port}`
  );
}

bootstrap();
