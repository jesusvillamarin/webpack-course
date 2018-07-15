### Aplicaremos un loader para poder cargar imagenes y empaquetarlas con webpack
## Usaremos un loader llamado 'url-loader', quien esta encargado de darle mantenimiento a este es el mismo equipo de >Webpack< 

- Es necesario instalar la dependecia de url-loader con npm de la siguiente forma
> npm install url-loader -D

- Es necesario generar el script para poder ejecutarlo
```
    "scripts":{
        "build:img":'webpack --config ./img-loader/webpack.config.js --mode development"
    }
```

- Hay que cargar el loader en el webpack de la siguiente forma.
```
const path = require('path')
const pluginExtract = require('mini-css-extract-plugin');

module.exports = {
    entry:path.resolve(__dirname,'./src/js/index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[pluginExtract.loader,'css-loader']
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader'
                    options:{
                        presets:['es2015']
                    }
                }
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:8192 
                    }
                }
            }
        ]
    },
    plugins:[
        {
            new pluginExtract({
                filename:'css/style.css'
            })
        }
    ]
}

```
  - Opción mas importarte de este loader es el key 'limit' y lo que hace es limitar el peso del archivo que va a convertir, por defecto convierte las imagenes a base64. Todo esto se realizara mientras y cuando no supere el limite declarado, el limit siempre sera definido en Bytes

  ```
    test:/\.(jpg|png|gif)$/,
    use:{
        loader:'url-loader',
        options:{
            limit:8192 
        }
    }
  ```
