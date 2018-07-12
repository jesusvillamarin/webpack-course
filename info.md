# ¿Que y porque usar Webpack?
- Es un Module Blunder for modern javascript applicatiions
> Empaquetador de modulos para aplicaciones modernas de javascript (**Para los que no saben inglés xd**)

- Primera forma de usar modulos en javascript es con AMD (**Asynchronous module definition**)
> Libereria mas popular de AMD es Require - JS, hace un número de peticiones según la cantidad de librerias que necesite.

- **CommonJS** es la manera de cargar modulos de nodejs
> Hace una sola petición pero forma un archivo previo con todas las librerias que necesita para asi entregar todo en una sola petición

# ¿Por qué usar webpack?
Trabaja con AMD y CommonJS para cargar modulos
> Webpack == Developer 
**Webpack** utilizado para tener mejor la configuración, modulos mas organizados y mejores productos


## Conceptos básicos
**Entry points** Modulo principal el cual se leera para importar los demás modulos, en webpack puede multiples entry point, webpack leera este archivo para generar un _bundle_

**Output** Configuraciones soble el archivo resultante 
- donde estará este archivo
- como se llamará

**Loaders** Nos ayudará a cargar todo tipo de formato de archivo _**jpg,png,git**_. Cualquier cosa que no sea nativo de javascript y necesite ser interpretado, empaquetada y exportada con un archivo javascript, será entendido por webpack gracias a los **loaders**


**Plugins** Nos ayudaran a extender las caracteristicas de Webpack, como para comprimir archivos usando Uglify (_**Dependencia utilizada para hacer el minificado de archivos**_) ó dividir los modulos en chunk(_**trozos**_) mas pequeños para que la app cargue más rápido




