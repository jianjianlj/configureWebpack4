const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//对css文件进行代码分割打包
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//css文件打包之后进行压缩

const prodConfig = {
    mode: 'production',//是生产环境还是开发环境
    devtool: 'cheap-module-source-map',//在生产环境中是用这种组合方式是比较好的
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'sass-loader',
                    'postcss-loader' //会在调用autoprefixer插件，在css3的标签前自动添加兼容浏览器前缀
                ]
            },{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
            }
        ]
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],//对css打包之后的文件进行压缩
    },
    plugins: [
        new MiniCssExtractPlugin(),//对css文件进行代码分割打包
    ],
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].chunk.js',//区别：在页面直接应用的模块是走的filename，间接引用的模块走的是chunkFilename
    }
}

module.exports = webpackMerge(commonConfig,prodConfig);