# Creación de un servidor de desarrollo con webpack
- Crear un servidor de desarrollo nos facilita la vida, debído a que se "automatizamos" las tareas que hacemos constantemente como lo es compilar un modulo cada vez que lo modificamos

- Por ejemplo: correr el script que nos compila todos los entry points que exitan en './src/js' junto los css que esten importados

> npm run build:multi:entry

## Para crear nuestro servidor es necesario instalar "webpack-dev-server" para eso hacemos lo siguiente
> npm install webpack-dev-server -D 
- **(-D)** hace referencia al --save-dev
### Sin instalar webpack-dev-server podemos agregar el siguiente flag a nuestros scripts y esté estara a la escucha de nuestros cambios
```"build:update" : "webpack --config ./Servidor-de-desarrollo/webpack.config.js --watch" ```

## Para crear nuestro servidor es necesario instalar "webpack-dev-server" para eso hacemos lo siguiente
> npm install webpack-dev-server -D 
- **(-D)** hace referencia al --save-dev

- Hacemos uso de el creando el script con la nueva dependencia **webpack-dev-server**
```
    "build:update" : "webpack-dev-server --config ./Servidor-de-desarrollo/webpack.config.js"
```

- Y el servidor se mantendra a la escucha de los cambios al ejecutar una vez el script
> npm run build:update

### Configuraciones que se le puede hacer al archivo webpack.config.js
```
entry:path.resolve(__dirname,'./src/js/index.js'),
output{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
},
devServer:{
    port:2904, // Puerto a elegir por el programador  ------  Configuraciones para el servidor de desarrollo
    .,
    .,
    .
},
module:{
    rules:[
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        }
    ]
}
```

### Existen muchos comandos mas para la configuración del servidor de desarrollo
```
--content-base <file/directory/url/port>
// — define la ruta base para los contenidos
--quiet
// — no mostrar salidas a la consola
--no-info
// — omitir la información innecesaria
--colors
// — añadir color a los mensajes de salida
--no-colors
// — no usar colores en los mensajes de salida
--host <hostname/ip>
// — define nombre o IP del host
--port <number>
// — define qué puerto usar
--inline
// – incorpora la webpack-dev-server runtime en el paquete
--hot
// — añadir el HotModuleReplacementPlugin y pasar a modo en caliente (hot).
// — NOTA: se debe evitar la habilitación doble: por parametros en el webpack.config.js + vía CLI.
--hot --inline
// — similar a webpack/hot/dev-server
--lazy
// — no habilita la observación (watch), debe evitarse el uso con --hot.
--https
// — inicia el servidor webpack-dev-server sobre el protocolo HTTPS.
// — Incluye un certificado digital auto-firmado para atender los requests.
--cert, --cacert, --key
// — indicar las rutas de ubicación de los archivos del certificado

Opciones que aplican al archivo webpack.config.js:

noInfo
// — Omite mostrar información innecesaria en la consola
// — Default: false
quiet
// — No muestra nada en la consola
// — Default: false
lazy
// — Cambia al modo lazy
// —Default: false
filename
// — en modo lazy: el cambio de peticiones dispara la recompilación
// — En la mayoría de los casos funciona igual que la configuración output.filename de js.
watchOptions.aggregateTimeout
// — Retrasa la recompilacion luego de los cambios. El valor es en ms.
// —Default: 300
watchOptions.poll
// — true: usa chequeo
// — numero: usa el chequeo en intervalos
// —Default: undefined
publicPath
// — la ruta para enlazar el middleware con el servidor.
// — En la mayoría de los casos es la misma que la configuracion output.publicPath del js.
headers
// — añadir cabeceras personalizadas. i. e. { “X-Custom-Header”: “yes” }
stats
// —Muestra en la salida opciones estadísticas.
```
