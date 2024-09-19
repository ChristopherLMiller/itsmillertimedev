'use strict';

module.exports = plugin => {
  // Get the current 'MenuItem' attributes
  const defaultAttrs = plugin.contentTypes['menu-item'].schema.attributes;

  // Define our custom attributes for 'MenuItem'
  const customAttrs = {
    icon: {
      type: 'string'
    }
  }

  // Extend the 'MenuItem' content with custom attributes
  plugin.contentTypes['menu-item'].schema.attributes = {
    ...defaultAttrs, ...customAttrs
  }

  return plugin;
}