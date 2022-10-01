const Order = require('../model/Order');

const createOrder = async (req, res) => {
    const order = await Order.create(req.body);
    res.status(201).json({message: 'Order saved!'});
}

const getOrders = async (req, res) => {
    const orders = await Order.find({});
    res.status(201).json({orders, countr: orders.length})
}

module.exports = {
    createOrder,
    getOrders
}