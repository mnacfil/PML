const Order = require('../model/Order');

// Post request to save the order in DB
const createOrder = async (req, res) => {
    const order = await Order.create(req.body);
    res.status(201).json({message: 'Order saved!'});
}

// Get All Orders, with Query
const getOrders = async (req, res) => {
    const { size, type, crust } = req.query;
    let query = {};

    if(type && (!size && !crust)) {
        query = {
            'pizzas.type': type,
        }
    }
    if(size && (!type && !crust)) {
        query = {
            'pizzas.size': size,
        }
    }
    if(crust && (!size && !type)) {
        query = {
            'pizzas.crust': crust,
        }
    }
    if(!type && (size && crust)) {
        query = {
            'pizzas.size': type,
            'pizzas.crust': crust,
        }
    }
    if(!size && (type && crust)) {
        query = {
            'pizzas.type': type,
            'pizzas.crust': crust,
        }
    }
    if(!crust && (size && type)) {
        query = {
            'pizzas.size': size,
            'pizzas.type': type,
        }
    }
    if(type && (size && crust)) {
        query = {
            'pizzas.size': size,
            'pizzas.crust': crust,
            'pizzas.type': type,
        }
    }

    let result = Order.find(query);

    const orders = await result;
    res.status(200).json({orders, count: orders.length})
}

// aggregrate all the topping used in custom
const toppingStats = async (req, res) => {
    let stats = await Order.aggregate([
        // 1st stage, 
        { $unwind: "$pizzas"},
        { $unwind: "$pizzas.toppings"},
        { $unwind: "$pizzas.toppings.toppingItem"},
        // 2nd stage, group base on topping item
        { $group: { _id: '$pizzas.toppings.toppingItem.item', totalItem: { $sum: 1 }} },
    ])
    res.status(200).json({stats});
}

module.exports = {
    createOrder,
    getOrders,
    toppingStats
}