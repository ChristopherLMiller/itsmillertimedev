import { prefixPluginTranslations } from "@strapi/helper-plugin";

import pluginPkg from "../../package.json";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";
import { PERMISSIONS } from "./constants";
import { pluginPermissions } from "./permissions";
import pluginId from "./pluginId";

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    // Add upstash to the left hand menu
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      Component: async () => {
        const component = await import("./pages/App");

        return component;
      },
      permissions: PERMISSIONS.view,
    });

    // Register the plugin
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app: any) {
    app.addSettingsLink("global", {
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: "Upstash",
      },
      id: "upstash",
      to: `/settings/${pluginId}`,
      async Component() {
        const component = await import("./pages/RedisViewPage");
        return component;
      },
      permissions: pluginPermissions.view,
    });
  },

  // Register the translations
  async registerTrads(app: any) {
    const { locales } = app;

    const importedTrads = await Promise.all(
      (locales as any[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
