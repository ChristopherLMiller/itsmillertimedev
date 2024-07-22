import { Strapi } from "@strapi/strapi";

export default async ({ strapi }: { strapi: Strapi }) => {
  console.log("Bootstrapping");
  await setupPermissions({ strapi });
};

const setupPermissions = async ({ strapi: strapi }) => {
  const actions = [
    {
      section: "plugins",
      displayName: "View",
      uid: "view",
      pluginName: "upstash",
    },
  ];
  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
