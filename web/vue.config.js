const { defineConfig } = require('@vue/cli-service');

// dev port
const port = process.env.port || process.env.npm_config_port || 9117;

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: port
  }
});
