import { Strapi } from "@strapi/strapi";
import { dataFetcher } from "../lib/dataFetcher";

export default ({ strapi }: { strapi: Strapi }) => ({
  getWorkspaces: async () => {
    return dataFetcher("/workspaces", "GET");
  },
  getWorkspace: async (workspaceId) => {
    return dataFetcher(`/workspaces/${workspaceId}`, "GET");
  },
  addWorkspace: async (data) => {
    return dataFetcher(`/workspaces`, "POST", data);
  },
});
