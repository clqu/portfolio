module.exports = {
  images: {
    domains: [ "i.imgur.com", "clqu.live", "/", "cdn.discordapp.com" ]
  },
  mode: 'production',
  optimization: {
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
        }).apply(compiler);
      },
    ],
  }
};