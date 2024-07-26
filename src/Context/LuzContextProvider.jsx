import React, { createContext, useState } from "react";

const LuzContext = createContext(null);

const LuzContextProvider = ({ children }) => {
    const [footer, setFooter] = useState(true);
    const [logsActive, setLogsActive] = useState(true);
    const [logsStyle, setLogsStyle] = useState(true);

    return (
        <LuzContext.Provider
            value={{
                setFooter,
                footer,
                logsActive,
                setLogsActive,
                logsStyle,
                setLogsStyle,
            }}
        >
            {children}
        </LuzContext.Provider>
    );
};

export {LuzContext ,LuzContextProvider};
