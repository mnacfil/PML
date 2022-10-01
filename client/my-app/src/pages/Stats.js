import React from "react";
import {Link} from 'react-router-dom';

const Stats = () => {
    return (
        <div>
            <h1>Your stats</h1>
            <Link to={'/'}>back home</Link>
        </div>
    )
}

export default Stats;