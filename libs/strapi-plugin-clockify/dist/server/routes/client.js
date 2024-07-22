"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = {
    type: "content-api",
    routes: [
        /* Workspaces */
        {
            method: "GET",
            path: "/workspaces",
            handler: "workspacesController.findMany",
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: "GET",
            path: "/workspaces/:workspaceId",
            handler: "workspacesController.findOne",
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: "POST",
            path: "/workspaces",
            handler: "workspacesController.createWorkspace",
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: "PATCH",
            path: "/workspaces/:workspaceId",
            handler: "workspacesController.updateWorkspace",
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: "DELETE",
            path: "/workspaces/:workspaceId",
            handler: "workspacesController.deleteWorkspace",
            config: {
                policies: [],
                auth: false,
            },
        },
        /* Projects */
        {
            method: "GET",
            path: "/projects/:workspaceId",
            handler: "projectsController.findMany",
            config: {
                policies: [],
                auth: false,
            },
        },
    ],
};
exports.default = routes;
