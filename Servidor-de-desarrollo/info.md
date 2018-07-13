# Creación de un servidor de desarrollo con webpack
- Crear un servidor de desarrollo nos facilita la vida, debído a que se "automatizamos" las tareas que hacemos constantemente como lo es compilar un modulo cada vez que lo modificamos

- Por ejemplo: correr el script que nos compila todos los entry points que exitan en './src/js' junto los css que esten importados

> npm run build:multi:entry

<<<<<<< HEAD
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

### Configuramos el package.json con 
=======
## Para crear nuestro servidor es necesario instalar "webpack-dev-server" para eso hacemos lo siguiente
> npm install webpack-dev-server -D 
- **(-D)** hace referencia al --save-dev
>>>>>>> 79417de8cda1305b5a908dfed1df6418f631cdc0
