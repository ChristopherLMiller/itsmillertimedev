import { prefixPluginTranslations } from "@strapi/helper-plugin";

import { Clock } from "@strapi/icons";
import pluginPkg from "../../package.json";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";
import pluginId from "./pluginId";
import { getTrad } from "./translations";

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    app.createSettingSection(
      {
        id: pluginId,
        intlLabel: {
          id: getTrad(
            "pages.settings.clockify.section.title",
            "Clockify Settings"
          ),
          defaultMessage: "Clockify Settings",
        },
      },
      [
        {
          intlLabel: {
            id: getTrad(
              "pages.settings.clockify.section.subtitle",
              "Configuration"
            ),
            defaultMessage: "Configuration",
          },
          id: "navigation",
          to: `/plugins/${pluginId}`,
          Component: async () => {
            const component = await import("./pages/WorkspacePage");

            return component;
          },
          permissions: [
            {
              action: `plugin::${name}.settings`,
              subject: null,
            },
          ],
        },
      ]
    );
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
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });
    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.registerPlugin(plugin);

    app.customFields.register({
      name: "clockify_projects",
      pluginId: pluginId,
      type: "text",
      intlLabel: {
        id: "clockify.projects.label",
        defaultMessage: "Project",
      },
      intlDescription: {
        id: "clockify.projects.description",
        defaultMessage: "The Clockify project name",
      },
      icon: Clock,
      components: {
        Input: async () => import("./components/ClockifyProjectInput"),
      },
    });
  },

  bootstrap(app: any) {},

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
