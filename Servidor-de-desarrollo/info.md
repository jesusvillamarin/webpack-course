# Creación de un servidor de desarrollo con webpack
- Crear un servidor de desarrollo nos facilita la vida, debído a que se "automatizamos" las tareas que hacemos constantemente como lo es compilar un modulo cada vez que lo modificamos

- Por ejemplo: correr el script que nos compila todos los entry points que exitan en './src/js' junto los css que esten importados

> npm run build:multi:entry

## Para crear nuestro servidor es necesario instalar "webpack-dev-server" para eso hacemos lo siguiente
> npm install webpack-dev-server -D 
- **(-D)** hace referencia al --save-dev