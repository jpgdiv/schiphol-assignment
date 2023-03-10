const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => ({
  entry: './src/index.tsx',
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: env.production ? 'production' : 'development',
  output: {
    filename: 'main.[hash].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
    hot: true,
    static: { 
      directory: path.resolve(__dirname, './src/assets'), 
      publicPath: '/assets'
    }
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          env.production ? MiniCssExtractPlugin.loader:  "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: env.production ? "[name].[hash].css" : "[name].css",
      chunkFilename: env.production ?  "[id].[hash].css" : "[id].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/api",
          to: "api/",
          transform(content, path) {
            return content;
          },
        },
      ],
    }),
  ],
});