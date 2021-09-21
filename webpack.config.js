// 这是把 css 抽成文件引入的
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 引入 html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
  // 把 base 中的所有属性都复制过来
  ...base,
  // 开发环境用到的
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  // 两种编译模式 开发用还是发布用
  mode: 'development',
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        // 这个是把 css 变成 style 现在是发布环境
        use: ["style-loader", "css-loader"],
      },
    ],
  }
};
