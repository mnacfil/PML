import React from "react";
import {Link} from 'react-router-dom';

const Orders = () => {
    return (
        <div>
            <h1>Your orders</h1>
            <Link to={'/'}>back home</Link>
        </div>
    )
}

export default Orders;