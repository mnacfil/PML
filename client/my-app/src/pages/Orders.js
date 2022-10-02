import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

let localUrl = 'http://localhost:5002/api/v1/orders/get-orders';
let prodUrl = 'https://pml-pizza-test.herokuapp.com/api/v1/orders/get-orders'

const Orders = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    const getAllOrders = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(prodUrl);
            const data = await response.json()
            setOrders(data.orders);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllOrders();
    }, [])

    if(isLoading) {
        return (
            <div className="loading">
                <h2>loading...</h2>
            </div>
        )
    }

    return (
        <section className="orders-page">
            <div className="title">
                <h2>All Orders</h2>
                <div className="title-underline"></div>
            </div>
            <div className="order-center">
                {
                    orders.map((order,index)  => {
                        const {orderNumber, pizzas} = order
                        return (
                            <div key={index} className="order">
                                <h4>Order #{orderNumber}</h4>
                                {
                                    pizzas.map((pizza, pizzaIndex) => {
                                        const {size, type, crust, pizzaNumber} = pizza
                                    return (
                                        <article key={pizzaIndex} className="pizza">
                                            <h5>Pizza no. {pizzaNumber}</h5>
                                            <div className="pizza-detail">
                                                <p>
                                                    Size: {size}
                                                </p>
                                                <p>
                                                    Crust: {crust}
                                                </p>
                                                <p>
                                                    Type: {type}
                                                </p>
                                            </div>
                                        </article>
                                )
                            })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className="home-link">
                <Link to={'/'}>Back home</Link>
            </div>
        </section>
    )
}

export default Orders;