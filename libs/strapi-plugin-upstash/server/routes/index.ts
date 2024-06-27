export default [
  {
    method: "GET",
    path: "/",
    handler: "upstashController.index",
    config: {
      policies: [],
      auth: false,
      /*{
          name: "admin::hasPermissions",
          config: {
            action: ["plugin::upstash.view"],
          },
        },
      ],*/
    },
  },
  {
    method: "GET",
    path: "/redis/:key",
    handler: "upstashController.getKey",
    config: {
      policies: [],
      auth: false,
      /*{
          name: "admin::hasPermissions",
          config: {
            action: ["plugin::upstash.view"],
          },
        },
      ],*/
    },
  },
];
