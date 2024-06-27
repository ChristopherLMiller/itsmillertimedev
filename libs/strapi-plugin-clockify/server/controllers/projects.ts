import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async findMany(ctx) {
    const data = await strapi
      .plugin("clockify")
      .service("projects")
      .getProjects(ctx);
    ctx.body = data;
  },
  async findOne(ctx) {
    const data = await strapi
      .plugin("clockify")
      .service("projects")
      .getProject(ctx);
    ctx.body = data;
  },
});
