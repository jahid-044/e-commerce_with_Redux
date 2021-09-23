import React, { createContext, useState } from "react";

export const modalContext = createContext([]);

function GlobalContext(props) {
    const [modalCall, setModalCall] = useState(false);
    const [cart, setCart] = useState([]);
    return (
        <modalContext.Provider value={{ modalCall, setModalCall, cart, setCart }}>
            {props.children}
        </modalContext.Provider>
    )
}

export default GlobalContext;