//Este archivo permite agrupar como un modulo tanto la conexión a la base de datos
//Como el modulo de consultas. De esta manera se importara unicamente la ruta 
//de la carpeta database

//Se le indica que exporte todo lo que viene desde connection.
export * from './connection';
//Se indica que exporte el objeto de las consultas de querys.js
export { queries } from './querys';

//Con npm run build se construye la carpeta para despliegue