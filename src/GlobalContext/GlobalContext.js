import React, { createContext, useState } from "react";

export const globalContext = createContext([]);

function GlobalContext(props) {
    const [modalCall, setModalCall] = useState(false);
    const [cart, setCart] = useState([]);
    
    return (
        <globalContext.Provider value={{ modalCall, setModalCall, cart, setCart }}>
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalContext;