const path = require('path');
const pluginExtract = require('mini-css-extract-plugin');

module.exports = {
    entry:path.resolve(__dirname,'src/js/index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
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
                test:/\.(png|jpg|gif|woff|eot|svg|ttf)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:100000
                    }
                }
            },
            {
                test:/\.(mp4|webm)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        limit:10000
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