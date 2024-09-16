import type { Schema, Attribute } from "@strapi/strapi";

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

export interface ModelsComments extends Schema.Component {
  collectionName: "components_models_comments";
  info: {
    displayName: "Comments";
    icon: "discuss";
  };
  attributes: {
    comment: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "Markdown";
          preset: "light";
        }
      >;
    created: Attribute.DateTime & Attribute.Required;
  };
}

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

export interface MetaPage extends Schema.Component {
  collectionName: "components_meta_pages";
  info: {
    displayName: "page";
    icon: "archive";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "shared.seo": SharedSeo;
      "shared.meta-social": SharedMetaSocial;
      "models.comments": ModelsComments;
      "models.build": ModelsBuild;
      "meta.page": MetaPage;
    }
  }
}
