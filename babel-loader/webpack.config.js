const path = require('path');
const pluginExtract = require('mini-css-extract-plugin');
module.exports = {
    entry: path.resolve(__dirname, './src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [pluginExtract.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: [
        new pluginExtract({
            filename: 'css/estilos.css'
        })
    ],
    devServer: {
        port: 2904
    }
}