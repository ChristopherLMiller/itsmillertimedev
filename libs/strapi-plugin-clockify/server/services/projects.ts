import { Strapi } from "@strapi/strapi";
import { dataFetcher } from "../lib/dataFetcher";

export default ({ strapi }: { strapi: Strapi }) => ({
  getProjects: async (ctx) => {
    const workspaceId = ctx.request.url.substring(1).split("/")[3];
    return dataFetcher(
      `/workspaces/${workspaceId}/projects?page-size=999`,
      "GET"
    );
  },
  getProject: async (projectId) => {
    return { projectId };
  },
});
