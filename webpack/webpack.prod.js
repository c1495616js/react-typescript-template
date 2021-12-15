const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: true,
      },
    }), new CssMinimizerPlugin()],
  },
  cache: {
    type: 'filesystem',
  }, 
  plugins: [
    new CompressionPlugin(), 
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
}
