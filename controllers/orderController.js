const Order = require('../model/Order');

const createOrder = async (req, res) => {
    const order = await Order.create(req.body);
    res.status(201).json({message: 'Order saved!'});
}

const getOrders = async (req, res) => {
    const { size, type } = req.query;
    // let query = {};
    // if(size) {
    //     query.size = size;
    // }
    // if(type) {
    //     query.type = type;
    // }
    // TO DO
    // Query parameter
    let result = Order.find({})
    const orders = await result;
    res.status(200).json({orders, count: orders.length})
}

module.exports = {
    createOrder,
    getOrders
}