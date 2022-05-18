const pool = require('../db/conexion');


const get = async (req, res) => {
    try {

        const response = await pool.query(`select v.id as "nr_venta" , c.nombre as "cliente", p.nombre as producto , d.cantidad , d.precio_total , p.precio as "Precio unitario"
        from detalles d 
       join ventas v on d.id_ventas = v.id 
       join productos p on d.id_productos = p.id
       join clientes c on v.id_clientes = c.id
       order by v.id `);
        console.log(response.rows);
        res.status(200).json(response.rows);

    } catch (error) {
        console.log(error);

    }
};


const create = async (req, res) => {
    try {

        const {
            id_ventas,id_productos,cantidad,precio_total
        } = req.body;
    
        const response = await pool.query('insert into detalles(id_ventas,id_productos,cantidad,precio_total) values($1,$2,$3,$4) RETURNING *;', [id_ventas,id_productos,cantidad,precio_total]);
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
    }
}

const update = async (req, res) => {
    const id = req.params.id;

    const texto = updateDicamic('detalles', req.body, 'id');
    const columns = getColumnas(req.body, id);

    const response = await pool.query(texto, columns);

    res.status(200).json(response.rows);
}

const remove = async (req, res) => {
    try { 
        const response = await pool.query('delete from detalles where id = $1 RETURNING *', [req.params.id]);  
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
const getIdDetalle = async (req, res) => {
    try {

        const response = await pool.query('select * from detalles where id = $1', [req.params.id]);
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
    getIdDetalle
}
