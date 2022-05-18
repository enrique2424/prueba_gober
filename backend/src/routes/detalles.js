const { Router } = require('express');
const router = Router();


const { create,get,update,remove,getIdDetalle} = require('../controllers/detalles');



router.get('/detalles',get);
router.get('/detalles/:id',getIdDetalle);
router.get('/detalles/:id',get);
router.post('/detalles',create)
router.delete('/detalles/:id',remove);
router.put('/detalles/:id',update);

module.exports = router;