import React from "react";
import {Link} from 'react-router-dom';
import { useGlobalContext } from "../context";

const Home = () => {

    const {value, setValue, processThePmlOrder, output} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <div className="title">
                <h2>We make your order easier</h2>
                <div className="title-underline"></div>
            </div>
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
                    {output}
                </div>
            </div>
        </main>
    )
}


{/* <div className="link-container">
            <Link to={'/orders'}>view orders</Link>
            <Link to={'/stats'}>view stats</Link>
        </div> */}

export default Home;