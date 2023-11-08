import { Multer as MulterNamed } from 'multer';

declare global {
  namespace Express {
    type Multer = MulterNamed;
  }
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      ALLOWED_ORIGINS: string;
      ENVIRONMENT: string;
      SUPABASE_URL: string;
      SUPABASE_KEY: string;
      SENTRY_DSN: string;
      REDIS_PORT: number;
      CACHE_TTL: number;
      MAX_ITEMS_IN_CACHE: number;
      CACHING_ENABLED: boolean;
      REDIS_HOST: string;
      REDIS_PASSWORD: string;
    }
  }
}
