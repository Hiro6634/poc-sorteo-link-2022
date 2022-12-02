import { createContext, useState } from 'react';

export const WinnerContext = createContext({
    
});

export const WinnersProvider = ({children}) => {
    const [winners, setWinners] = useState();
    const value = {winners};

    return(
        <WinnerContext.Provider value={value}>{children}</WinnerContext.Provider>
    )
}
