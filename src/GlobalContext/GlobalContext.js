import React, { createContext, useEffect, useState } from "react";

export const globalContext = createContext([]);

function GlobalContext(props) {
    const [modalCall, setModalCall] = useState(false);
    const [cart, setCart] = useState(()=>{return localStorage.getItem("cartItem")!==null?JSON.parse(localStorage.getItem("cartItem")):[]});
    
    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(cart))
    },["cartItem",cart])
    
    return (
        <globalContext.Provider value={{ modalCall, setModalCall, cart, setCart }}>
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalContext;