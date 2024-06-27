"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataFetcher_1 = require("../lib/dataFetcher");
exports.default = ({ strapi }) => ({
    getWorkspaces: async () => {
        return (0, dataFetcher_1.dataFetcher)("/workspaces", "GET");
    },
    getWorkspace: async (workspaceId) => {
        return (0, dataFetcher_1.dataFetcher)(`/workspaces/${workspaceId}`, "GET");
    },
    addWorkspace: async (data) => {
        return (0, dataFetcher_1.dataFetcher)(`/workspaces`, "POST", data);
    },
});
