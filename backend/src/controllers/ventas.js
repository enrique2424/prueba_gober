const pool = require('../db/conexion');


const get = async (req, res) => {
    try {

        const response = await pool.query('select * from ventas ');
        console.log(response.rows);
        res.status(200).json(response.rows);

    } catch (error) {
        console.log(error);

    }
};


const create = async (req, res) => {
    try {

        const {
            id_clientes
        } = req.body;
    
        const response = await pool.query('insert into ventas(id_clientes) values($1) RETURNING *;', [id_clientes]);
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
    }
}

const update = async (req, res) => {
    const id = req.params.id;

    const texto = updateDicamic('ventas', req.body, 'id');
    const columns = getColumnas(req.body, id);

    const response = await pool.query(texto, columns);

    res.status(200).json(response.rows);
}

const remove = async (req, res) => {
    try { 
        const response = await pool.query('delete from ventas where id = $1 RETURNING *', [req.params.id]);  
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
    }
}

/* funciones para poder hacer un update dinamico */

const updateDicamic = (tabla, columnas, campo) => {
    let query = [`UPDATE ${tabla}`];
    query.push('SET');

    let set = [];
    let count = 0;
    Object.keys(columnas).forEach(function (key, i) {
        set.push(key + ' = $' + (i + 1));
        count = i + 1;
    });
    query.push(set.join(', '));

    query.push(`WHERE ${campo} = ` + `$${count + 1} RETURNING *`);

    return query.join(' ');
}

const getColumnas = (columnas, id) => {
    let set = [];

    for (const key in columnas) {
        set.push(columnas[key]);
    }
    set.push(id);
    return set;
}
const getIdVentas = async (req, res) => {
    try {

        const response = await pool.query('select * from ventas where id = $1', [req.params.id]);
        res.status(200).json(response.rows);

    } catch (error) {
        console.log(error);

    }
}


module.exports = {
    get,
    create,
    update,
    remove,
    getIdVentas
}
