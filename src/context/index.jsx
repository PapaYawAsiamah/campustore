"use client";
import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const [find, setFind] = useState("");
    let sharedState = {
        find, setFind 
    }
    return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}
export default AppContext;