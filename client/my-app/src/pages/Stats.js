import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

let url = 'http://localhost:5002/api/v1/orders/topping-stats';

const Stats = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState([]);

    const getToppingStats = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json()
            setStats(data.stats);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getToppingStats();
    }, [])

    if(isLoading) {
        return (
            <div className="loading">
                <h2>loading...</h2>
            </div>
        )
    }

    return (
        <section className="stats-page">
            <div className="title">
                    <h2>Topping Stats</h2>
                    <div className="title-underline"></div>
            </div>
            <div className="stats-center">
                {
                    stats.map((stat, index) => {
                        const {_id, totalItem} = stat
                        return (
                            <article key={index} className="stat">
                                <h4> <span>{totalItem} </span>{_id}</h4>
                            </article>
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

export default Stats;