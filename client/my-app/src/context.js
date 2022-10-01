import React from "react";
import { useContext, useState } from "react";
import {convertTagToXml, isPmlOrderValid} from "./util/util";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [value, setValue] = useState('');
    const [output, setOutput] = useState('');

    const processThePmlOrder = (order) => {
        console.log(isPmlOrderValid(order))
        outputError(isPmlOrderValid(order))
    }

    const outputError = (result) => {
        setOutput(result)
    }

    return (
        <AppContext.Provider value={{
            value,
            setValue,
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