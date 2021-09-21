// 这是把 css 抽成文件引入的
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 引入 html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  // 两种编译模式 开发用还是发布用
  mode: 'production',
  plugins: [
    // 这里继承 base 中的 plugin (new HtmlWebpackPlugin)
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      // 这里直接覆盖掉 base 中的 rules
      {
        test: /\.css$/i,
        // 这里是生产环境，也就是发布环境。
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  }
};
