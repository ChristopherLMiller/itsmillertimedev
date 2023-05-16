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
  discord: {
    spam_channel: process.env.DISCORD_BOT_SPAM_CHANNEL,
    general_channel: process.env.DISCORD_BOT_GENERAL_CHANNEL,
    token: process.env.DISCORD_BOT_TOKEN,
  },
  adminjs: {
    email: process.env.ADMINJS_EMAIL,
    password: process.env.ADMINJS_PASSWORD,
    secret: process.env.ADMINJS_SECRET,
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
  google_maps: {
    key: process.env.GOOGLE_MAP_API_KEY,
  },
};
