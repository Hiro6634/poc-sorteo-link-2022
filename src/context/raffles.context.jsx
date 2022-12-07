import { createContext, useState } from 'react';

import RAFFLES from './raffles.json';
export const RaffleContext = createContext({
    isLoading: true,
    running: false, 
    raffles: []
});

export const RafflesStates = {
    PENDIENTE: 'PENDIENTE',
    ENPROGRESO: 'ENPROGRESO',
    SORTEADO: 'SORTEADO'
};

export const RafflesProvider = ({children}) => {
    const [running, setRunning] = useState({running: false});
    const [raffles] = useState(RAFFLES);
    const [isLoading, setIsLoading] = useState({isLoading: true});

    const setLoadingValue = (value) => setIsLoading(value);

    const getNextRaffle = () => {
        raffles.map((raffle)=>{
            if(raffle.state === RafflesStates.PENDIENTE ){
                console.log("FOUND:", raffle);
                return raffle;
            }
        });
        return null;
    }

    const value = { 
        raffles,
        getNextRaffle,
        running,
        setRunning,
        isLoading,
        setLoadingValue
    };
    return(
        <RaffleContext.Provider value={value}>{children}</RaffleContext.Provider>
    )
}