import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Sentry from '@sentry/node';
import { V1Module } from './app/v1/v1.module';
import { SentryInterceptor } from './interceptors/sentry.interceptor';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageData = require('../../../package.json');

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    V1Module,
    new FastifyAdapter(),
    { bufferLogs: true }
  );

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
      'UnsupportedMediaTypeException: No Exiff segment found in the given image.',
    ],
  });
  app.useGlobalInterceptors(new SentryInterceptor());

  app.setGlobalPrefix('api');
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
