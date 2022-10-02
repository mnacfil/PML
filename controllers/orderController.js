const Order = require('../model/Order');

const createOrder = async (req, res) => {
    const order = await Order.create(req.body);
    res.status(201).json({message: 'Order saved!'});
}

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

module.exports = {
    createOrder,
    getOrders
}