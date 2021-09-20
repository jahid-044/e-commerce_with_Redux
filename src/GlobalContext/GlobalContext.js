import React, { createContext, useState } from "react";

export const modalContext = createContext([]);

function GlobalContext(props) {
    const [modalCall, setModalCall] = useState(false);
    const [qty, setQty] = useState(0);
    return (
        <modalContext.Provider value={{ modalCall, setModalCall, qty, setQty }}>
            {props.children}
        </modalContext.Provider>
    )
}

export default GlobalContext;