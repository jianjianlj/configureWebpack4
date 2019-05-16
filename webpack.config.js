const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        main:'./src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.jpg$/,
                use: {
                    // loader: 'file-loader',
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'image/',
                        limit: 204800000
                    }
                }
            },{
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            }


        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}