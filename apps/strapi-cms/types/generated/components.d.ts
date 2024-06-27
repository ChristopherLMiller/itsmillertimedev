import type { Schema, Attribute } from "@strapi/strapi";

export interface ModelsBuild extends Schema.Component {
  collectionName: "components_models_builds";
  info: {
    displayName: "Build";
    icon: "car";
    description: "";
  };
  attributes: {
    section: Attribute.String & Attribute.Required;
    contents: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "Markdown";
          preset: "rich";
        }
      >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: "components_shared_meta_socials";
  info: {
    displayName: "metaSocial";
    icon: "project-diagram";
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<["Facebook", "Twitter"]> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<"images" | "files" | "videos">;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: "components_shared_seos";
  info: {
    displayName: "seo";
    icon: "search";
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<"images" | "files" | "videos">;
    metaSocial: Attribute.Component<"shared.meta-social", true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "models.build": ModelsBuild;
      "shared.meta-social": SharedMetaSocial;
      "shared.seo": SharedSeo;
    }
  }
}