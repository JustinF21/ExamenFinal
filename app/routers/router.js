
let express = require('express');
let router = express.Router();

 //constasntes de rutas 
const customers = require('../controllers/controller.js');
const huespedes = require('../controllers/huesped.js');

const juegos = require('../controllers/juegos.controller.js');

router.post('/api/customers/create', customers.create);
router.get('/api/customers/all', customers.retrieveAllCustomers);
router.get('/api/customers/onebyid/:id', customers.getCustomerById);
router.get('/api/customers/filteringbyage', customers.filteringByAge);
router.get('/api/customers/pagination', customers.pagination);
router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
router.put('/api/customers/update/:id', customers.updateById);
router.delete('/api/customers/delete/:id', customers.deleteById);

router.post('/api/huespedes/create', huespedes.create);
router.get('/api/huespedes/all', huespedes.retrieveAllHuespedes);
router.get('/api/huespedes/onebyid/:id', huespedes.getHuespedById);
router.put('/api/huespedes/update/:id', huespedes.updateById);
router.delete('/api/huespedes/delete/:id', huespedes.deleteById);

router.post('/api/juegos/create', juego.create);
router.get('/api/juegos/all', juego.retrieveAllJuegos);
router.get('/api/juegos/onebyid/:id', juego.getJuegoById);
router.put('/api/juegos/update/:id', juego.updateById);
router.delete('/api/juegos/delete/:id', juego.deleteById);







module.exports = router;

