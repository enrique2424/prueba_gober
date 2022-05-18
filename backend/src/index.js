const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extends: false}));
const PORT = process.env.PORT || 5000;

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



// router 
app.use(require('./routes/ventas'));
app.use(require('./routes/productos'));
app.use(require('./routes/clientes'));
app.use(require('./routes/detalles'));

app.listen(PORT,()=>{
    console.log('servidor en el puerto:' + PORT);
})