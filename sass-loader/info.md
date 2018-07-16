### Soportar estilos sass con webpack es sencillo
La configuración no cambia mucho, quedaría de la siguiente manera
```
    {
        test: /\.css$/,
        use:[pluginExtract.loader,'css-loader']
    },
    {
        test: /\.scss$/,
        use:[pluginExtract.loader,'sass-loader']
    }
```

### Solo es necesario instalar el loader de sass 
Este loader lo que hará es soportar sass y lo entendera pero como sass son estilos pre-procesados, necesita que alguien los transforme a css para eso utilizamos *node-sass*
* Lo instalamos de la siguiente manera
> npm install sass-loader node-sass -D

*Solo faltaria crear el script y listo
> "build:sass":"webpack --config ./sass-loader/webpack.config.js --mode development"
