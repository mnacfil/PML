import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { useGlobalContext } from "../context";
import HTMLReactParser from "html-react-parser";

const Home = () => {
    const [value, setValue] = useState('');
    const {processThePmlOrder, output} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <div className="navbar">
                <div className="title">
                    <h2>Pizza Test</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="link-container">
                    <Link to={'/orders'}>All orders</Link>
                    <Link to={'/stats'}>Topping stats</Link>
                </div> 
            </div>
            <section className="pml-content">
                <div className="pml-center">
                    <div className="pml-input">
                        <form className="pml-form" onSubmit={handleSubmit}>
                            <h2>pml order</h2>
                            <textarea  
                                id="pml-textarea" 
                                placeholder="You're order here..."
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                >
                            </textarea>
                            <button 
                                className="submit-btn btn"
                                type="submit"
                                onClick={() => processThePmlOrder(value)}
                                >
                                submit
                            </button>
                        </form>
                    </div>
                    <div className="pml-output">
                        {HTMLReactParser(output)}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;