const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js')

const prodConfig = {
    mode: 'production',//是生产环境还是开发环境
    devtool: 'cheap-module-source-map',//在生产环境中是用这种组合方式是比较好的
}

module.exports = webpackMerge(commonConfig,prodConfig);