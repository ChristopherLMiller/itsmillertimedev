export default ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      referrerPolicy: {
        policy: "same-origin",
      },
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "default-src": [
            "'self'",
            "data:",
            "blob:",
            "https://www.youtube.com/",
            "https://www.youtube.com/embed/",
            "https://player.vimeo.com/",
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://image-cdn.itsmillertime.dev",
            "https://images.itsmillertime.dev",
            "https://res.cloudinary.com",
            "https://market-assets.strapi.io",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://www.youtube.com/",
            "https://www.youtube.com/embed/",
            "https://player.vimeo.com/",
            "https://pic.twitter.com/",
            "https://twitter.com/",
            "https://res.cloudinary.com",
            "https://market-assets.strapi.io",
          ],
          "frame-src": [
            "'self'",
            "data:",
            "blob:",
            "https://www.youtube.com/",
            "https://www.youtube.com/embed/",
            "https://player.vimeo.com/",
            "https://plausible.itsmillertime.dev/",
            "https://sandbox.embed.apollographql.com/",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      headers: env("CORS_ALLOW_HEADERS", "*"),
      origin: env("CORS_ALLOW_ORIGIN", "*"),
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
