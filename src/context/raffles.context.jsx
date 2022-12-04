import { createContext, useState } from 'react';

import RAFFLES from './raffles.json';
export const RaffleContext = createContext({
    running: false, 
    timerId: 0,
    raffles: []
});

export const RafflesProvider = ({children}) => {
    const [running, setRunning] = useState({running: false});
    const [timerId, setTimerId] = useState();
    const [raffles] = useState(RAFFLES);
    const value = { 
        raffles,
        running,
        setRunning,
        timerId,
        setTimerId
    };
    return(
        <RaffleContext.Provider value={value}>{children}</RaffleContext.Provider>
    )
}