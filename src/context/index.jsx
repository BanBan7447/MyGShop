import React, { useState, createContext } from 'react'

// Kho dữ liệu chung cho cả ứng dụng
const AppContext = createContext();

const index = (props) => {
    const { children } = props;
    const [users, setUsers] = useState(null);

    return (
        <AppContext.Provider value={{ users, setUsers }}>
            {children}
        </AppContext.Provider>
    )

}

export { AppContext, index };