const express = require('express');
const router = express.Router();

// controllers
const { createOrder, getOrders, toppingStats} = require('../controllers/orderController')

router.post('/create-order', createOrder);
router.get('/get-orders', getOrders);
router.get('/topping-stats', toppingStats);

module.exports = router;