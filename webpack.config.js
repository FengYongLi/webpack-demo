const path = require('path');

module.exports = {
  // 两种编译模式 开发用还是发布用
  mode: 'development',
  // 入口 编译哪里的文件
  entry: './src/index.js',
  // 出口
  output: {
    // 这样设置可以更改文件名
    filename: '[name].[contenthash].js'
  }
};