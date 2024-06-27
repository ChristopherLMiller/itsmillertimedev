"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataFetcher_1 = require("../lib/dataFetcher");
exports.default = ({ strapi }) => ({
    getProjects: async (ctx) => {
        const workspaceId = ctx.request.url.substring(1).split("/")[3];
        return (0, dataFetcher_1.dataFetcher)(`/workspaces/${workspaceId}/projects?page-size=999`, "GET");
    },
    getProject: async (projectId) => {
        return { projectId };
    },
});
