# File-loader, exportador de archivos para formatos  png,jpg,gif, mp4,webm...
* File loader exporta los archivos y los ubica en la carpeta dist
* Url loader convierte los archivos a base 64 y los compila con el bundle

## La configuración para este es la siguiente:
```
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
                test:/\.(jpg|png|gif|woff|tff|svg|eot)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:1000 //bytes
                    }
                }
            },
            {
                test:/\.(mp4|webm)$/,
                use:{
                    loader:'url-loader', 
                    // El loader no cambia, ya que por defecto si el video pesa mas del limit webpack usara file-loader para exportar el video

                    limit:100000,
                    name:'video/[name].[hash].[ext] 
                    // name--> nombre del video, metodo hash para cada vez que se compile, ext --> por cada tipo de extensión que exista en este caso solo aceptara mp4 y webm

                }
            }
        ]
    }
```

### Se debe añadir el 'publicPath' en la propiedad de output, para que todos los archivos exportados puedan ser usados sin problema. Quedando de la siguiente forma:
```
    {
        entry:path.resolve(__dirname,'index.js'),
        output:{
            path:path.resolve(__dirname,'dist');
            filename:'bundle.js',
            publicPath:'./dist/' // Ruta que permitira usar los assets exportados
        }
    }
```

* Como todas las prácticas anteriores se debe crear el script
> "build:file-loader":"webpack --config ./file-loader/webpack.config.js --mode development"

* No hay que olvidarnos de instalar el loader!!
> npm install file-loader -D