import path from 'path';
const pluginExtract = require('mini-css-extract-plugin');
module.exports={
    entry:path.resolve(__dirname,'src/js/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'./dist'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[pluginExtract.loader,'css-loader']
            },
            {
                test: /\.scss$/,
                use:[pluginExtract.loader,'css-loader','sass-loader']
            },
            {
                test: /\.styl$/,
                use:[pluginExtract.loader,'css-loader','stylus-loader']
            }
        ]
    }
}
