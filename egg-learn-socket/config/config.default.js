'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1518614221862_2409';

  // add your config here
  config.middleware = [];

  config.io = {
    init: {

    },
    namespace: {

      '/': {

        connectionMiddleware: ['auth'],
        packetMiddleware: ["packet"]
      },
      "/example": {
        connectionMiddleware: ["connection"],
        packetMiddleware: []
      },
      "/chat": {
        connectionMiddleware: ["connection"],
        packetMiddleware: []
      }

    }
  }
  return config;
};
