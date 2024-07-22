import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => {
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
