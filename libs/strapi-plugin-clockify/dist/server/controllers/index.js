"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const projects_1 = __importDefault(require("./projects"));
const workspaces_1 = __importDefault(require("./workspaces"));
exports.default = {
    projectsController: projects_1.default,
    workspacesController: workspaces_1.default,
};
