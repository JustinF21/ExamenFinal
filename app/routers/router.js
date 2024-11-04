
let express = require('express');
let router = express.Router();

 //constasntes de rutas 
const customers = require('../controllers/controller.js');
const huespedes = require('../controllers/huesped.js');

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




module.exports = router;

