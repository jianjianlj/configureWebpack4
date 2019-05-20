const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js')

const devConfig = {
    mode: 'development',//是生产环境还是开发环境
    devtool: 'cheap-module-eval-source-map',//在开发环境中使用这种组合方式是比较好的
    devServer: {
        contentBase: './dist',//开启一个服务器
        port: 8080,
        open: true,
        hot: true, //HMR模块更新
        // hotOnly: true //编译失败也不刷新页面
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
    ],
    optimization: { //mode 为开发环境需要配这个配置项/为生产环境不需要，因为已经默认配置好
        usedExports: true
    },
}

module.exports = webpackMerge(commonConfig,devConfig);