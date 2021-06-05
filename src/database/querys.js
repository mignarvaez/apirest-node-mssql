'use strict';
//Este archivo almacena las consultas a la base de datos
//Se exporta  el objeto que almacena las consultas
export const queries = {
    getAllEstudiantes: 'SELECT * FROM tbl_estudiantes',
    createNewEstudiante: `INSERT INTO tbl_estudiantes (cod_estudiante,nom_estudiante,tel_estudiante,dir_estudiante,edad_estudiante)
        VALUES (@cod_estudiante,@nom_estudiante,@tel_estudiante,@dir_estudiante,@edad_estudiante)`,
    getEstudianteByCodigo: 'SELECT * FROM tbl_estudiantes WHERE cod_estudiante = @cod_estudiante',
    deleteEstudianteByCodigo: 'DELETE FROM tbl_estudiantes WHERE cod_estudiante = @cod_estudiante',
    getTotalEstudiantes: 'SELECT COUNT (*) FROM tbl_estudiantes',
    updateEstudianteByCodigo: `UPDATE tbl_estudiantes SET nom_estudiante=@nom_estudiante, tel_estudiante=@tel_estudiante, dir_estudiante=@dir_estudiante, 
        edad_estudiante=@edad_estudiante WHERE cod_estudiante = @cod_estudiante`
};