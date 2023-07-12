const crypto = require('crypto');
module.exports = ({ env })=>({
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
    },
  },
});
