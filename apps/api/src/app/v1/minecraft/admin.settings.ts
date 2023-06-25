export const MinecraftNavigation = {
  name: 'Minecraft',
  icon: 'GameConsole',
};

export const MinecraftRuleAdminSettings = {
  navigation: MinecraftNavigation,
  listProperties: ['name', 'description', 'createdAt', 'updatedAt', 'category'],
  properties: {
    description: {
      type: 'textarea',
      props: {
        rows: 10,
      },
    },
  },
};

export const MinecraftRuleCategoryAdminSettings = {
  navigation: MinecraftNavigation,
  listProperties: ['name', 'icon'],
};