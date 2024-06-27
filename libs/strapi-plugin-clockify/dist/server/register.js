"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    // register phase
    strapi.customFields.register({
        name: "clockify_projects",
        plugin: "clockify",
        type: "text",
        inputSize: {
            default: 4,
            isResizable: true,
        },
    });
};
