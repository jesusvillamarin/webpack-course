### Para definir multiples entry points:
- Es necesario cambiar la forma de definir la propiedad entry

- De:
```
    const path = require('path');
    module.exports = {
        entry: path.resolve(__dirname,'nombreArchivo.js'), <<<<<
        output:{
            path: path.resolve(__dirname,'dist'),
            filename:'bundle.js'
        }
    }
```
- A:
```
    const path = require('path');
    module.exports = {
        entry:{
            home: path.resolve(__dirname,'index.js'),
            precios: path.resolve(__dirname,'precios.js'),
            contacto: path.resolve(__dirname,'contacto.js'),

        }
        output:{
            path: path.resolve(__dirname,'dist'),
            filename:'js/[name].js'
        }
    }
```

- En filename se coloca [name] para que tomé el nombre de entry como valor de output 

### Y como siempre se agrega el script en el package.json
```
    "scripts" :{
        "build:multi:entry" : "webpack --config ./multiples-entry/webpack.config.js --mode development"
     }
```

> npm run build:multi:entry

# NOTA: Hay que acordarse que para que los css también sean compilados, deben estar importados en el archivo javascript correspondiente

- Por ejemplo index.js
```
import '../css/estilos.css';
document.write('Archivo js destinada a las funcionalidades de la página principal');
```