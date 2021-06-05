'use strict';
//El archivo que gestiona las rutas de la API

//Se importa la función router de express
import { Router } from 'express';
//Se importa el archivo que tiene los controladores para las rutas
import { createNewEstudiante, getEstudiantes, getEstudianteByCodigo, deleteEstudianteByCodigo, getTotalEstudiantes, updateEstudianteByCodigo } from '../controladores/estudiantes.controlador';

//Se crea el objeto router asociado a la funcion router para gestionar rutas
const router = Router();

//Ruta asociada a obtener todos los estudiantes
router.get('/estudiantes', getEstudiantes);

//Ruta asociada a crear un nuevo estudiante
router.post('/estudiantes', createNewEstudiante);

//Ruta asociada a obtener el total de estudiantes registrados
router.get('/estudiantes/count', getTotalEstudiantes);

//Ruta asociada a obtener un estudiante según su codigo
router.get('/estudiantes/:cod_estudiante', getEstudianteByCodigo);

//Ruta asociada a eliminar un estudiante segun su codigo
router.delete('/estudiantes/:cod_estudiante', deleteEstudianteByCodigo);

//Ruta asociada a actualizar un estudiante segun su codigo
router.put('/estudiantes/:cod_estudiante', updateEstudianteByCodigo);

export default router;