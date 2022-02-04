module.exports = {
  images: {
    domains: [ "i.imgur.com", "clqu.live", "/" ]
  },
  mode: 'production',
  optimization: {
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          /* your config */
        }).apply(compiler);
      },
    ],
  }
};
