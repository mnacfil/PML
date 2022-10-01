const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item: String
})

const toppingSchema = new mongoose.Schema({
    toppingArea: String,
    toppingItem: [itemSchema]
})

const PizzaDetailSchema = new mongoose.Schema({
    pizzaNumber: {
        type: String,
        required: [true, 'Please provide pizza number']
    },
    size: {
        type: String,
        enum: {
            values: ['small', 'medium', 'large'],
            message: `{VALUE} is not supported`
        },
        required: [true, 'Please provide size of pizza']
    },
    type: {
        type: String,
        enum: {
            values:  ['Hawaiian', 'Chicken Fajita', 'pepperoni feast', 'custom'],
            message: `{VALUE} is not supported`
        },
        required: [true, 'Please provide type of pizza']
    },
    crust: {
        type: String,
        required: [true, 'Please provide crust of pizza']
    },
    toppings: [toppingSchema],
})

const OrderSchema = new mongoose.Schema({
        orderNumber: {
            type: String,
            required: [true, 'Please provide order number']
        },
        pizzas: [PizzaDetailSchema],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Order', OrderSchema)