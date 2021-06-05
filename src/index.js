'use strict';
//Se importa el archivo app.js que tiene las configuraciones de express
import app from "./app";

//Se pone a escuchar al servidor en el puerto indicado
app.listen(app.get('port'));

//Se muestra en consola en que puerto corre el servidor
console.log('Server corriendo en el puerto', app.get('port'));