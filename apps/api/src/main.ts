import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Sentry from '@sentry/node';
import { V1Module } from './app/v1/v1.module';
import { SentryInterceptor } from './interceptors/sentry.interceptor';
import { logger } from './middleware/logging.middleware';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageData = require('../../../package.json');

async function bootstrap() {
  const app = await NestFactory.create(V1Module, {
    bufferLogs: true,
  });

  // Enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
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

  // Use CORS
  app.enableCors({
    origin: '*',
  });

  // And finally, lets get Sentry going
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    release: packageData.version,
    environment: process.env.NODE_ENV,
    ignoreErrors: [
      'UnsupportedMediaTypeException: No Exif segment found in the given image.',
    ],
  });

  //Register global pieces
  app.useGlobalInterceptors(new SentryInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.use(logger);
  app.setGlobalPrefix('api');

  // Start the application
  const port = process.env.PORT || 3333;
  await app.listen(port, '0.0.0.0');
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
