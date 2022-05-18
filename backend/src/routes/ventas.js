const { Router } = require('express');
const router = Router();


const { create,get,update,remove,getIdVentas} = require('../controllers/ventas');


router.get('/ventas',get);
router.get('/ventas/:id',getIdVentas);
router.get('/ventas/:id',get);
router.post('/ventas',create)
router.delete('/ventas/:id',remove);
router.put('/ventas/:id',update);

module.exports = router;