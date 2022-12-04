import { createContext, useState } from 'react';

import RAFFLES from './raffles.json';
export const RaffleContext = createContext({
    running: false, 
    raffles: []
});

export const RafflesProvider = ({children}) => {
    const [running, setRunning] = useState({running: false});
    const [raffles] = useState(RAFFLES);
    const value = { 
        raffles,
        running,
        setRunning
    };
    return(
        <RaffleContext.Provider value={value}>{children}</RaffleContext.Provider>
    )
}