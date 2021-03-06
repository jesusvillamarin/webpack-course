const path = require('path');
const pluginExtract = require('mini-css-extract-plugin');

module.exports = {
    entry:path.resolve(__dirname,'src/js/index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'./dist/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[pluginExtract.loader,'css-loader']
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015']
                    }
                }
            },
            {
                test:/\.(png|jpg|gif|woff|ttf|svg|eot)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:100000,
                        name:'assets/[name].[hash].[ext]'
                    }
                }
            },
            {
                test:/\.(mp4|webm)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:1000,
                        name:'videos/[name].[hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins:[
        new pluginExtract({
            filename:'css/styles.css'
        })
    ]
}