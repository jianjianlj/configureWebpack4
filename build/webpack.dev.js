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
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
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
                use: ['style-loader','css-loader','postcss-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
    ],
    // optimization: { //mode 为开发环境需要配这个配置项/为生产环境不需要，因为已经默认配置好
    //     usedExports: true
    // },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',//区别：在页面直接应用的模块是走的filename，间接引用的模块走的是chunkFilename
    }
}

module.exports = webpackMerge(commonConfig,devConfig);