const { Router } = require('express');
const router = Router();


const { create,get,update,remove,getIdClientes} = require('../controllers/clientes');


router.get('/clientes',get);
router.get('/clientes/:id',getIdClientes);
router.get('/clientes/:id',get);
router.post('/clientes',create)
router.delete('/clientes/:id',remove);
router.put('/clientes/:id',update);

module.exports = router;