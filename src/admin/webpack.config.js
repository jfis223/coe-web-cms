'use strict';

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const { resolve } = require('path');

module.exports = (config, webpack) => {
  config.plugins.push(new MonacoWebpackPlugin());
  config.resolve.alias['extensions'] = resolve('src/extensions');

  return config;
};
