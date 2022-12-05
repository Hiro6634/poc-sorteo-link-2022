import { createContext, useState } from 'react';

import RAFFLES from './raffles.json';
export const RaffleContext = createContext({
    isLoading: true,
    running: false, 
    raffles: []
});

export const RafflesProvider = ({children}) => {
    const [running, setRunning] = useState({running: false});
    const [raffles] = useState(RAFFLES);
    const [isLoading, setIsLoading] = useState({isLoading: true});

    const setLoadingValue = (value) => setIsLoading(value);

    const value = { 
        raffles,
        running,
        setRunning,
        isLoading,
        setLoadingValue
    };
    return(
        <RaffleContext.Provider value={value}>{children}</RaffleContext.Provider>
    )
}