import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  /**
   * Retrieves multiple workspaces and sets the response body with the retrieved data.
   *
   * @param {Object} ctx - The Koa context object.
   * @return {Promise<Object>} - A promise that resolves when the response body is set.
   */
  async findMany(ctx) {
    const data = await strapi
      .plugin("clockify")
      .service("workspaces")
      .getWorkspaces();
    ctx.body = data;
  },

  /**
   * Retrieves a single workspace based on the provided workspace ID from the context.
   *
   * @param {Object} ctx - The context object containing the workspace ID.
   * @return {Promise<Object>} The workspace data.
   */
  async findOne(ctx) {
    const data = await strapi
      .plugin("clockify")
      .service("workspaces")
      .getWorkspace(ctx.params.workspaceId);
    ctx.body = data;
  },

  /**
   * Creates a new workspace using the provided context.
   *
   * @param {Object} ctx - The context object containing the request body.
   * @return {Promise<Object>} The created workspace data.
   */
  async createWorkspace(ctx) {
    const data = await strapi
      .plugin("clockify")
      .service("workspaces")
      .addWorkspace(ctx.request.body);
    ctx.body = data;
  },

  async updateWorkspace(ctx) {},

  async deleteWorkspace(ctx) {},
});
