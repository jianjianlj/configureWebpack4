const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //作用：会在打包之结束后，自动生成一个html文件，并且把打包生成的js文件引入到html文件中
const CleanWebpackPlugin = require('clean-webpack-plugin');//作用：会在打包之前就会生除上次打包的文件
const webpack = require('webpack');

module.exports = {
    mode: 'development',//是生产环境还是开发环境
    devtool: 'cheap-module-eval-source-map',//在开发环境中使用这种组合方式是比较好的
    //devtool: 'cheap-module-source-map',在生产环境中是用这种组合方式是比较好的
    entry: { 
        main:'./src/index.js', //webpack打包的入口
    },
    devServer: {
        contentBase: './dist',//开启一个服务器
        port: 8080,
        open: true,
        hot: true, //HMR模块更新
        // hotOnly: true //编译失败也不刷新页面
    },
    module: { //模块打包---样式，字体文件。。
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, //'过滤掉node_modules里面的js文件，因为其里面文件已经被转化好了
                loader: 'babel-loader',
                // options: {
                    // 业务代码
                    // presets: [
                    //     [
                    //         "@babel/preset-env",{
                    //             "useBuiltIns": 'usage',
                    //             // "targets": {
                    //             //     chorme: '67' //运行在浏览器的什么版本上
                    //             // }
                    //         }
                    //     ],
                    //     "@babel/preset-react"
                    // ] 
                    //ui组件/打包内库
                    // "plugins": [['@babel/plugin-transform-runtime',{
                        //     "absoluteRuntime": false,
                        //     "corejs": 2,// 当值为2的时候需要安装npm install --save @babel/runtime-corejs2
                        //     "helpers": true,
                        //     "regenerator": true,
                        //     "useESModules": false
                    // }]]
                // }
            },{
                test: /\.jpg$/,
                use: {
                    // loader: 'file-loader',
                    loader: 'url-loader',//url-loader 包括了file-loader的功能
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'image/',//图片打包之后目录
                        limit: 2048 //对图片的大小进行判断，大于这就一图片文件形式打包在dist目录下面，小于则直接字节的形式打包到bundle.js文件内部
                    }
                } 
            },{
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
            },{
                test: /\.(eot|ttf|svg|woff)$/,//字体文件打包
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: 'dist'}), //api升级参数只接收的数据合适是object
        // new CleanWebpackPlugin('dist'),
        new webpack.HotModuleReplacementPlugin({}),
    ],
    optimization: { //mode 为开发环境需要配这个配置项/为生产环境不需要，因为已经默认配置好
        usedExports: true
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    }
}