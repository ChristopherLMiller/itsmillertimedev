import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index(ctx) {
    const data = await strapi
      .plugin("upstash")
      .service("upstashService")
      .getRedisCache();
    ctx.body = data;
  },

  async getKey(ctx) {
    const data = await strapi
      .plugin("upstash")
      .service("upstashService")
      .getRedisCacheKey(ctx.params.key);
    ctx.body = data;
  },
});
