'use strict';
//Se importa express para gestionar las peticiones 
import express from 'express';
//Se importa el modulo de configuración para inicializar el express
import config from './config'
//Se importa el archivo que contiene las rutas de la API
import estudiantesRutas from './rutas/estudiantes.rutas';

//Se inicializa en la constante app la funcionalidad de expres
const app = express();

//Configuraciones de express
app.set('port', config.port)

//Configuración de middlewares
//Se indica a la aplicación de express que use json
app.use(express.json())
//Se indica a la aplicación de express que use urlencoded(reciba datos desde formularios)
app.use(express.urlencoded({ extended: false }));

//Se le indica a la app de express que use las rutas importadas
app.use(estudiantesRutas);

//Se exporta la constante como default, implicando que será el unico export de este archivo
//además de que podrá importarse con cualquier nombre
export default app;