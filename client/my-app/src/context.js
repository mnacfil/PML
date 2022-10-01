import React from "react";
import { useContext, useState } from "react";
import {displayReadableOrder, isPmlOrderValid} from "./util/util";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [output, setOutput] = useState('');

    const processThePmlOrder = (order) => {
        const result = isPmlOrderValid(order);
        if(result === true) {
            const output = displayReadableOrder(order);
            outputSuccess(output);
            return
        }
        outputError(result);
    }

    const outputSuccess = (result) => {
        setOutput(result);
    }

    const outputError = (result) => {
        setOutput(result);
    }

    return (
        <AppContext.Provider value={{
            processThePmlOrder,
            output
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider};