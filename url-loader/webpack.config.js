const path = require('path');
const pluginExtract = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname,'src/js/index.js'),
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
                test:/\.(png|jpg|gif|woff|ttf|svg|eot)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:100000
                    }
                }
            }
        ]
    },
    plugins:[
        new pluginExtract({
            filename:'css/style.css'
        })
    ]

}