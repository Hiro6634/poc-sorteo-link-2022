import { createContext, useState } from 'react';

import RAFFLES from './raffles.json';
export const RaffleContext = createContext({

});

export const RafflesProvider = ({children}) => {
    const [raffles, setRaffles] = useState(RAFFLES);
    const value = { raffles };
    return(
        <RaffleContext.Provider value={value}>{children}</RaffleContext.Provider>
    )
}