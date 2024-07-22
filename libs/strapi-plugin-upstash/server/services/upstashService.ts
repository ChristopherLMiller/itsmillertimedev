import { Strapi } from "@strapi/strapi";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://us1-heroic-spider-38575.upstash.io",
  token:
    "AZavACQgNzRkNWJiOTktYjFmYy00ZWNlLTg5OTEtNzhlMDE3NDcyMjE0N2ZlYzZhMjYwYTBhNDhmMGIyZGY2MWUwZjQ1OTRiODU=",
});

export default ({ strapi }: { strapi: Strapi }) => ({
  async getRedisCache() {
    const data = await redis.scan(0);
    const cursor = data[0];
    const keys = data[1];
    const keyValues = [] as any;

    for (const key of keys) {
      const value = await redis.get(key);
      const ttl = await redis.ttl(key);
      const size = new Blob([JSON.stringify(value)]).size;

      keyValues.push({ key, value: value, ttl, size });
    }

    return { cursor, data: keyValues };
  },

  async getRedisCacheKey(key: string) {
    const value = await redis.get(key);
    return { key, value };
  },
});
