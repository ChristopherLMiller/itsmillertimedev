export const config = {
  general: {
    environment: process.env.NODE_ENV,
    isDev: process.env.NODE_ENV === 'development',
    port: process.env.PORT || 3333,
    allowedOrigins: process.env.ALLOWED_ORIGINS || '*',
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
  caching: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ttl: process.env.CACHE_TTL,
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
    },
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
};
