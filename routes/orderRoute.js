const express = require('express');
const router = express.Router();

// controllers
const { createOrder, getOrders} = require('../controllers/orderController')

router.post('/create-order', createOrder);
router.get('/get-orders', getOrders);

module.exports = router;