"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
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
