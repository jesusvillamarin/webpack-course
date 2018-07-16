# Haciendo uso del preprocesador stylus y soportandolo con su respectivo loader
* Se instala de la siguiente manera
> npm install stylus-loader stylus --save-dev
* style-loader es quien soportara las hojas de estilos de tipo stylus
* stylus será el core que lo transformara a código css para ser presentado

## La configuración queda de la siguiente manera
```
    rules:[
        {
            test: /\.css$/,
            use:[pluginExtract.loader,'css-loader']
        },
        {
            test: /\.sass$/,
            use:[pluginExtract.loader,'css-loader,'sass-loader']
        },
        {
            test: /\.styl$/,
            use:[pluginExtract.loader,'css-loader','stylus-loader']
        }
    ]
```
## Pero stylu aparte tiene otras opciones que se le pueden agregar
```
    {
        test: /\.styl$/,
        use:[pluginExtract.loader,'css-loader',
        {
            loader:'stylus-loader,
            options:{
                use:{
                    require('nib'), // Conjunto de mixins que ayudaran algunos prefijos para que sean soportados en navegadores viejos

                    require('rupture') 
                    //Mixins para utilizar y dar soporte a medias queries con soporte ligera 
                },
                {
                    import:['~nib/lib/nib/index.styl','~rupture/rupture/index.styl']
                }
            }
        }]
    }
```

>npm install rupture nib -D