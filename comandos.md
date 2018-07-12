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
**Corremos este script de la siguiente manera**
> npm run build

**Procesando el entry points con webpack**
> webpack entry point output
> ∴ webpack index.js bundle.js

## webpack.config.js
**Configuraremos los entry points y outpus en el archivo de webpack con javascript**
Para que webpack y javascript puedan entender este archivo, es necesario exportarlo como un modulo de CommonJS
```

module.export= {
    entry : 'index.js',
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