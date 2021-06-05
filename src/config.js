'use strict';
//Archivo que almacena y exporta las configuraciones necesarias para iniciar el server y la conexion a la base de datos
//Se importa el modulo dotenv, especificamente su funcion config, para que pueda leer las variables de entorno
//definidas en el computador donde corre el servidor
import { config } from 'dotenv';

//Se ejecuta la funcion config para que lee las variables de entorno
config();

//Si existen variables de entorno defenidas, deben usarse, en caso contrario, se usaran los valores por defecto
export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || ''
};