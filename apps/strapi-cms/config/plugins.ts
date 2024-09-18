export default ({ env }) => ({
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            host: env("UPSTASH_URL"),
            port: env("UPSTASH_PORT"),
            db: 0,
            password: env("UPSTASH_TOKEN"),
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
  clockify: {
    enabled: true,
  },
  /*upstash: {
    enabled: true,
    resolve: "../../strapi-plugin-upstash",
  },*/
  plausible: {
    config: {
      sharedLink: env("PLAUSIBLE_SHARED_LINK"),
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "redis",
        options: {
          max: 32767,
          connection: "default",
          keepAlive: 86400000,
        },
      },
      strategy: {
        contentTypes: [
          "api::manufacturer.manufacturer",
          "api::model.model",
          "api::model-kit.model-kit",
          "api::model-tag.model-tag",
          "api::page.page",
          "api::post.post",
          "api::post-category.post-category",
          "api::scale.scale",
        ],
      },
    },
  },
  sentry: {
    enabled: true,
    config: {
      dsn: env("NODE_ENV") === "production" ? env("SENTRY_DSN") : null,
      sendMetadata: true,
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("CF_ACCESS_KEY_ID"),
        secretAccessKey: env("CF_ACCESS_SECRET"),
        endpoint: env("CF_ENDPOINT"),
        params: {
          Bucket: env("CF_BUCKET"),
          bucket: env("CF_BUCKET"),
        },
        cloudflarePublicAccessUrl: env("CF_PUBLIC_ACCESS_URL"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::post.post",
          published: {
            url: `${env("FRONTEND_URL")}/blog/post/{slug}`,
          },
        },
        {
          uid: "api::page.page",
          published: {
            url: `${env("FRONTEND_URL")}/{slug}`,
          },
        },
        {
          uid: "api::model.model",
          published: {
            url: `${env("FRONTEND_URL")}/models/model/{slug}`,
          },
        },
      ],
    },
  },
  "strapi-regenerator": {
    enabled: true,
  },
  "strapi-blurhash": {
    enabled: true,
    config: {
      regenerateOnUpdate: true,
      forceRegenerateOnUpdate: false,
    },
  },
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"),
      },
      settings: {
        defaultFrom: env("RESEND_DEFAULT_FROM"),
        defaultReplyTo: env("RESEND_DEFAULT_REPLY_TO"),
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      plugins: {
        ids: { menus: true },
      },
    },
  },
});
