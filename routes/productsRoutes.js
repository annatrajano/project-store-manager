const express = require('express');

const router = express.Router();

const productsControllers = require('../controllers/productsController');

router.get('/', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getByIdProduct);
router.post('/', productsControllers.add);

module.exports = router; 