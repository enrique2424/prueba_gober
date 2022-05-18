const {
    Pool
} = require('pg');

/* Conexion con heroku */
// const config = {
//     user: 'kllmxkrutfljgi',
//     host: '176.34.97.213',
//     password: '4263d83a5b90676c4a2d8dd77ce7968186c2be187542e79a5b017fb6acadb87c',
//     database: 'd15g6k29074qss',
//     ssl: {
//         rejectUnauthorized: false
//     }
// }

/* conexion con db local */
const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'supermercado'
}


const pool = new Pool(config);


module.exports = pool