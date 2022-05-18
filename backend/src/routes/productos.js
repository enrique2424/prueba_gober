const { Router } = require('express');
const router = Router();


const { create,get,update,remove,getIdProductos} = require('../controllers/productos');


router.get('/productos',get);
router.get('/productos/:id',getIdProductos);
router.get('/productos/:id',get);
router.post('/productos',create)
router.delete('/productos/:id',remove);
router.put('/productos/:id',update);

module.exports = router;