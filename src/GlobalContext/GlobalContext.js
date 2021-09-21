import React, { createContext, useState } from "react";

export const modalContext = createContext([]);

function GlobalContext(props) {
    const [modalCall, setModalCall] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [cart, setCart] = useState([]);
    return (
        <modalContext.Provider value={{ modalCall, setModalCall, cart, setCart, totalAmount, setTotalAmount, totalQuantity, setTotalQuantity }}>
            {props.children}
        </modalContext.Provider>
    )
}

export default GlobalContext;