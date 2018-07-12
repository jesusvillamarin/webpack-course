# Instalamos la versión **(LTS) Long Term Support** 

**npm init** Para iniciar proyecto de javascript

### Instalando Webpack
```
npm install webpack webpack-cli --save-dev
--save** -> Guardar el paquete en el package.json
-dev** -> Guarde la dependencia para desarrollo

```

- Comprobar la versión de webpack dentro de un proyecto
> npm list webpack

-  Comprobar la versión de webpack instalando en todo el sistema operativo
> webpack -v

**Creación de un Entry points** 
> Creamos un index.js --> agregamos unas lineas de prueba

### Creando script de webpack en package.json para poder ejecutar la instrucción
``` 
    "description": "Curso de Webpack visto en la plataforma de E-learning Platzi",
    "main": "index.js",
    "scripts": {
        "build": "webpack index.js --output bundle.js --mode development"
    },
```
**Procesamos el entry point con este script de la siguiente manera para poder generar el output (_bundle.js_)**
> npm run build



## webpack.config.js
**Configuraremos los entry points y outpus en el archivo de webpack con javascript**
Para que webpack y javascript puedan entender este archivo, es necesario exportarlo como un modulo de CommonJS
```

module.export= {
    entry : './index.js',
    output : {
        filename : 'bundle.js'
    }
}
```

**Para poder compilarlo es necesario crear un nuevo script**
```
    "main":"index.js",
    "scripts":{
        "build": "webpack index.js --output bundle.js --mode development",
        "build:local": "webpack --mode development"
    }
```
> Solo se coloca **"build:local" : "webpack"**  debído a que por defecto se toma el archivo webpack.config.js

## Cargando configuración de rutas relativas 
Creamos una nueva carpeta de prueba llamada **external** y creamos los archivos **_webpack.config.js_** e **_index.js_** 

### El archivo webpack.config.js dentro de la carpeta external tendra la siguient configuración

```
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname,'index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}
```

### Se agrega un nuevo script al package.json
```
    "main" : 'index.js',
    "scripts" : {
        "build" : 'webpack index.js --output bundle.js --mode development",
        "build:local" : 'webpack --mode development",
        "build:external" : "webpack --config ./external/webpack.config.js --mode development"
    }

```

### Lo ejecutamos de la siguiente manera
> npm run build:external


### Leer otro tipo de archivo dentro de nuestro archivo javascript que estamos compilando (Entry point) con Loaders dentro de webpack

- En este caso leeremos un archivo css
Para esta práctica crearemos una carpeta llamada **css-styles-loaders** con su respectivo **webpack.config.js** , **index.js¨**, **index.html** y **estilos.css**



### El webpack.config.js quedara de la siguiente manera 

```
const path = require('path')
module.exports = {
    entry: path.resolve(__dirname,'index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            // Lista de loaders que se van a utilizar
            // Los loaders nos ayudaran a soportar diferentes tipos de archivos dentro de nuestro javscript
            test: /\.css$/, ---> Tipo de archivo que leera y soportara
            
            // Los Loaders que usaremos son style-loader y css-loader debído a que no estan precargados en el webpack 
            // Podemos cargar un solo loader usando comillas o multiples loaders usando un array [] separando por coma (,)
            use:['css-loader','style-loader'],
                'css-loader' // ---> Poder cargar archivos css e interpretarlos dentros de javascript

                'style-loader' // ---> Poder imprimir los previos archivos una vez ya interpretados
        ]
    }
}
```
### Debemos instalar dos loaders que no estan precargados en webpack para poder interpretar archivos css

> npm install css-loader style-loader --save-dev
- -D ( Hace referencia al --save-dev)

### Creamos el script en el package.json para poder ejecutarlo 
```
    "main": "index.js",
    "scripts" : {
        "build" : "webpack index.js --output bundle.js --mode development",
        "build:local" : "webpack --mode development",
        "build:external: "webpack --config ./external/webpack.config.js --mode development",
        "build:css" : "webpack --config ./css-styles-loaders/webpack.config.js --mode development"
    }
```
 Lo ejecutamos de la siguiente manera
 > npm run build:css

### Sacar los estilos del bundle y ponerlos en un archivo externo eso lo podemos hacer con un plugin llamado Extract Text Webpack
Para eso hay que instalarlo con el siguiente comando
> npm install extract-text-webpack-plugin@next 

### Existe una versión mas liviana para extraer los estilos css para webpack 4
> npm install mini-css-extract-plugin --save-dev