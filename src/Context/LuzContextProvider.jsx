import React, { createContext, useState } from "react";

const LuzContext = createContext(null);

const LuzContextProvider = ({ children }) => {
    const [footer, setFooter] = useState(true);
    const [logsStyle, setLogsStyle] = useState(true);
    const [notInAuth, setNotInAuth] = useState(false)

    return (
        <LuzContext.Provider
            value={{
                notInAuth,
                setNotInAuth,
                footer,
                setFooter,
                logsStyle,
                setLogsStyle,
            }}
        >
            {children}
        </LuzContext.Provider>
    );
};

export {LuzContext ,LuzContextProvider};
