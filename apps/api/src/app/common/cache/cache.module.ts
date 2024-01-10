import { CacheModule } from "@nestjs/cache-manager";
import { Logger, Module } from "@nestjs/common";
import MemoryStore from "cache-manager-memory-store";
import { redisStore } from "cache-manager-redis-yet";
import { RedisClientOptions } from "redis";

@Module({
  imports: [
    CacheModule.registerAsync<RedisClientOptions>({
      isGlobal: true,
      useFactory: async () => {
        const logger = new Logger(CachingModule.name);
        // If we don't want caching eject now
        if (!process.env.CACHING_ENABLED) {
          logger.log("Caching Service - Disabled");
          return {};
        }

        // If we are in dev mode, set memory cache
        if (process.env.NODE_ENV === "development") {
          logger.log("Caching Service - Development mode; memory cache");
          return { store: MemoryStore };
        }

        // If we reached this point we aren't in dev mode, and caching is enabled
        // try and create the redis store, if it fails then fallback to memory cache
        try {
          logger.log(
            `Caching Service - ${process.env.REDIS_HOST}:${process.env.REDIS_PORT} TTL: ${process.env.CACHE_TTL}`,
          );

          const store = await redisStore({
            url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
            ttl: +process.env.CACHE_TTL,
            pingInterval: 1000 * 10,
            disableOfflineQueue: false,
          });

          store.client.on("connect", () => {
            logger.log("Connected to Redis");
          });

          store.client.on("error", (err) => {
            logger.log(err.message);
          });

          store.client.on("ready", () => {
            logger.log("Redis is ready");
          });

          store.client.on("reconnecting", () => {
            logger.log("Redis client is reconnecting");
          });

          store.client.on("end", () => {
            logger.log("Redis connection ended");
          });

          process.on("SIGINT", () => {
            store.client.quit();
          });
          return { store };
        } catch (error) {
          logger.log(
            "Unable to connect to redis store, falling back to memory cache",
          );
          logger.log(error);
          return { store: MemoryStore };
        }
      },
    }),
  ],
})
export class CachingModule {}
