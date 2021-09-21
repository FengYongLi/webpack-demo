// 引入 html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // 入口 编译哪里的文件
  entry: './src/index.js',
  // 出口
  output: {
    // 这样设置可以更改文件名
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '模板 title',
      template: 'src/assets/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require('dart-sass')
            }
          },
        ]
      },
      {
        test: /\.less$/i,
        loader: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      }
    ]
  }
};
