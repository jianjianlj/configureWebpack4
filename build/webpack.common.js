const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //作用：会在打包之结束后，自动生成一个html文件，并且把打包生成的js文件引入到html文件中
const CleanWebpackPlugin = require('clean-webpack-plugin');//作用：会在打包之前就会生除上次打包的文件

module.exports = {
    entry: { 
        main:'./src/index.js', //webpack打包的入口
        server: './src/index.js'
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
        new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: 'dist',root: path.resolve(__dirname, '../')
            
        }), //api升级参数只接收的数据合适是object
    ],
    optimization: {
        splitChunks: {
            chunks: "all",//chunks的键值可以选择是对同步的模块(initial)/异步的模块进行代码分割(aysnc);all表示对同步/异步都代码分割
            minSize: 30000,//对引入的模块的大小，如果大于30kb就进行代码分割
            maxSize: 0,//对引入的代码模块是否进行二次分割，分割的大小一maxSize的设定值
            minChunks: 1,//依据引入的模块使用次数进行是否判断代码分割
            maxAsyncRequests: 5,//对获取请求模块最大是5个，超过了5个，前5个模块是要进行代码分割，超过的部分就不进行代码分割
            maxInitialRequests: 3, //页面的请求超过3个的部分就不在进行代码分割
            automaticNameDelimiter: '~',//在catchGroup中默认打包中的名字加～
            name: true,//在catchGroup中vendor组和default组代码分割的的文件命名有效
            cacheGroups: {//在上面的条件满足之后进去缓存组
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10 ,//优先级到底是进vendors组还是default组
                    name: 'vendors'
                },
                default: {
                    // minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                    name: 'default'
                }
            }
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'../dist')
    }
}