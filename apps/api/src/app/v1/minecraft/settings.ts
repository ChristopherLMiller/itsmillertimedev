export const MinecraftNavigation = {
  name: 'Minecraft',
  icon: 'GameConsole',
};

export const MinecraftRuleAdminSettings = {
  navigation: MinecraftNavigation,
  listProperties: ['name', 'description', 'createdAt', 'updatedAt', 'category'],
};

export const MinecraftRuleCategoryAdminSettings = {
  navigation: MinecraftNavigation,
  listProperties: ['name', 'icon', 'MinecraftRules'],
};
