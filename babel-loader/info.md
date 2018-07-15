### Agregando babel a nuestro webpack para tener un código que pueda ser interpretado por javascript
- Es necesario instalar las siguientes dependencias
> npm install babel-loader babel-core babel-preset-es2015 babel-preset-es2016 -D  

El archivo de webpack.config.js quedaria de la siguiente manera
```
const path = require('path');
const pluginExtract = require('mini-css-extract-plugin');
module.exports = {
    entry:path.resolve(__dirname,'index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[pluginExtract.loader,'css-loader']
            },
            // Se agrega un nuevo objeto para el loader de babel, debido que el tipo de archivo que va soportar es distinto >>>> ( /\.js$/) <<<<
            // Tambien se agrega el key 'options' ya que especificaremos que tipo de presets queremos que nuestro webpack transpile, tambien son llamadas configuraciones especiales
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{    
                        presets:['es2015']
                    }
                }
            }
        ]
    },
    plugins:[
        new pluginExtract({
            filename:'css/estilos.css'
        })
    ]
}
```