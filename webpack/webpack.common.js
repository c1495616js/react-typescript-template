const path = require('path')
const webpack = require('webpack')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

const paths = require('./paths')
const getClientEnvironment = require('./env')
const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1))

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: { 
      path: require.resolve("path-browserify"), 
      stream: require.resolve("stream-browserify"), 
      crypto: require.resolve("crypto-browserify"), 
      buffer : require.resolve("buffer/"), 
      util: require.resolve("util/") 
    },
    plugins: [new TsconfigPathsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          { 
            loader: 'css-loader', 
            options: { 
              importLoaders: 1,
            },
          },
          { 
            loader: 'postcss-loader'
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, '..', './public/favicon.jpg'),
    }),
    new webpack.DefinePlugin(env.stringified),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].min.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', './public/manifest.json'), to: path.resolve(__dirname, '..', './build') },
      ],
    }),
  ],
  stats: 'errors-only',
}
