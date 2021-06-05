'use strict';
//Se importa el modulo de node para trabajar con sql server
import sql from 'mssql';

//Se importa el modulo que tiene las opciones de configuracion
import config from '../config';

//El objeto que tiene las configuraciones de conexión
const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true,
    },

};

//Se realiza la conexión con el objeto con los atributos de conexión, creado previamente
//La función connect es asincrona, por tanto se usa async y await para esperar a que termine
//de conectarse para continuar con la ejecución del programa
//El resultado se almacena en una constante denominada pool
export async function getConnection() {
    //Se engloba en un try/catch para monitorear errores
    try {
        const pool = await sql.connect(dbSettings);
        //Se retorna el objeto pool para que pueda usarse desde el controlador
        return pool;

    } catch (error) {
        //Se muestra el error
        console.log(error);
    }
}

//se exporta el modulo de mssql para que pueda ser usado
//desde el controlador
export { sql };