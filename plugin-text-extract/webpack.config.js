const path = require('path');
const pluginExtract = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: 
        [
            {
            test: /\.css$/,
            use: [ pluginExtract.loader,'css-loader' ],
            }
        ]
    },
    plugins:[
        new pluginExtract({
            filename:'css/style.css'
        })
    ]

}