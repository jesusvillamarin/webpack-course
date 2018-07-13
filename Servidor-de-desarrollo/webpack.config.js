const path = require('path');
module.exports = {
    entry:path.resolve(__dirname, './src/js/index.js'),
    output:{
        filename: 'bundle.js'
    },
    devServer:{
        port:2904
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    }
    // plugins: [
    //     new pluginExtract({
    //         filename:'css/[name].css'
    //     })
    
    // ]
}