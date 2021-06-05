'use strict';
//Archivo que almacena las interacciones con la base de datos
//Las funciones se exportan con un nombre por lo que deberan ser importadas con el mismo
//con el que se las define

//Se importa la conexión a la base de datos y los querys
import { getConnection, sql, queries } from '../database';

//Función asincrona almacenada en una constante que retorna los estudiantes de la base de datos
export const getEstudiantes = async (req, res) => {

    try {
        //Se obtiene el objeto pool, indicando await, que viene de la conexión a la base de datos
        const pool = await getConnection();

        //Se realiza la consulta, indicando await esperando que primero termine la consulta y luego continue
        //con la ejecución del programa, almacenando el resultado
        const resultado = await pool.request().query(queries.getAllEstudiantes);

        //Se retorna como json el recordset del resultado
        res.json(resultado.recordset);
    } catch (error) {
        //Si hay un error se envia un mensaje de error interno del servidor y un mensaje informando el error
        res.status(500);
        res.send(error.message);
    }
};

//Función asincrona encargada de crear un nuevo estudiante
export const createNewEstudiante = async (req, res) => {
    //Se obtienen los valores desde el body
    const { cod_estudiante, nom_estudiante, tel_estudiante, dir_estudiante, edad_estudiante } = req.body;

    //Se valida que los valores no sean nulos y la edad sea mayor o igual que 3
    if (cod_estudiante == null || nom_estudiante == null || tel_estudiante == null || dir_estudiante == null || edad_estudiante == null || parseInt(edad_estudiante) < 3) {
        //Se retorna una mensaje de error de tipo badrequest
        return res.status(400).json({ msg: 'Bad request. Por favor llena correctamente los campos' });
    };

    try {
        //Se obtiene el objeto pool, indicando await, que viene de la conexión a la base de datos
        const pool = await getConnection();

        //Se realiza la correspondiente consulta, se envia un input por cada dato a enviar, con su nombre
        //tipo y valor.
        await pool.request()
            .input("cod_estudiante", sql.VarChar, cod_estudiante)
            .input("nom_estudiante", sql.VarChar, nom_estudiante)
            .input("tel_estudiante", sql.VarChar, tel_estudiante)
            .input("dir_estudiante", sql.VarChar, dir_estudiante)
            .input("edad_estudiante", sql.Int, edad_estudiante)
            .query(queries.createNewEstudiante);
        //Se retorna los datos agregados
        res.json({ cod_estudiante, nom_estudiante, tel_estudiante, dir_estudiante, edad_estudiante });
    } catch (error) {
        //Si hay un error se envia un mensaje de error interno del servidor y un mensaje informando el error
        res.status(500);
        res.send(error.message);
    }
};

//Función encargada de retornar un estudiante según el codigo dado
export const getEstudianteByCodigo = async (req, res) => {
    try {
        //Se obtiene la id de la url como parametro
        const { cod_estudiante } = req.params;

        //Se obtiene el objeto pool
        const pool = await getConnection();
        const resultado = await pool.request().input('cod_estudiante', sql.VarChar, cod_estudiante).query(queries.getEstudianteByCodigo);
        //Se indica que devuelva el elemento en la posición 0 del recordset
        res.json(resultado.recordset[0]);
    } catch (error) {
        //Si hay un error se envia un mensaje de error interno del servidor y un mensaje informando el error
        res.status(500);
        res.send(error.message);
    }

};

//Función encargada de eliminar un estudiante según el codigo dado
export const deleteEstudianteByCodigo = async (req, res) => {
    try {
        //Se obtiene la id de la url como parametro
        const { cod_estudiante } = req.params;

        //Se obtiene el objeto pool
        const pool = await getConnection();
        const resultado = await pool.request().input('cod_estudiante', sql.VarChar, cod_estudiante).query(queries.deleteEstudianteByCodigo);
        //Si no se logro eliminar nada, significa que no se encontro el estudiante
        //y se envia un error 404
        if (resultado.rowsAffected[0] === 0) return res.sendStatus(404)

        //Se devuelve un mensaje 204 indicando que se ha eliminado correctamente
        res.sendStatus(204);
    } catch (error) {
        //Si hay un error se envia un mensaje de error interno del servidor y un mensaje informando el error
        res.status(500);
        res.send(error.message);
    }
};

//Función encargada de obtener el número total de estudiantes registrados
export const getTotalEstudiantes = async (req, res) => {
    try {
        //Se obtiene el objeto pool
        const pool = await getConnection();
        const resultado = await pool.request().query(queries.getTotalEstudiantes);
        //Se devuelve un json con el result.recorset en la posicion 0 y la propiedad que viene vacia, la cuál corresponde a la respuesta
        res.json(resultado.recordset[0]['']);
    } catch (error) {
        //Si hay un error se envia un mensaje de error interno del servidor y un mensaje informando el error
        res.status(500);
        res.send(error.message);
    }
};

//Función asincrona encargada de actualizar un estudiante segun código
export const updateEstudianteByCodigo = async (req, res) => {

    //El codigo sale de la url
    const { cod_estudiante } = req.params;

    //Se obtienen los valores desde el body
    const { nom_estudiante, tel_estudiante, dir_estudiante, edad_estudiante } = req.body;

    //Se valida que los valores no sean nulos y la edad sea mayor o igual que 3
    if (nom_estudiante == null || tel_estudiante == null || dir_estudiante == null || edad_estudiante == null || parseInt(edad_estudiante) < 3) {
        //Se retorna una mensaje de error de tipo badrequest
        return res.status(400).json({ msg: 'Bad request. Por favor llena correctamente los campos' });
    };

    try {
        //Se obtiene el objeto pool, indicando await, que viene de la conexión a la base de datos
        const pool = await getConnection();

        //Se realiza la correspondiente consulta, se envia un input por cada dato a enviar, con su nombre
        //tipo y valor.
        await pool.request()
            .input("cod_estudiante", sql.VarChar, cod_estudiante)
            .input("nom_estudiante", sql.VarChar, nom_estudiante)
            .input("tel_estudiante", sql.VarChar, tel_estudiante)
            .input("dir_estudiante", sql.VarChar, dir_estudiante)
            .input("edad_estudiante", sql.Int, edad_estudiante)
            .query(queries.updateEstudianteByCodigo);
        //Se retorna los valores actualizados
        res.json({ cod_estudiante, nom_estudiante, tel_estudiante, dir_estudiante, edad_estudiante });
    } catch (error) {
        //Si hay un error se envia un mensaje de error interno del servidor y un mensaje informando el error
        res.status(500);
        res.send(error.message);
    }
};