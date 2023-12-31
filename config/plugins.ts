const crypto = require('crypto');
module.exports = ({ env })=>({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 10,
    }
  },
  "location-field": {
    enabled: true,
    config: {
      fields: ["photo", "rating"],
      googleMapsApiKey: env("GOOGLE_MAPS_API_KEY"),
      autocompletionRequestOptions: {},
    },
  },
  "video-field": {
    enabled: true
  },
  'import-export-entries': {
    enabled: true,
    config: {
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
    },
    menus: {
      config: {
        maxDepth: 2,
      },
    },
  },
});
