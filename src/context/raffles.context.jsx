import { createContext, useState } from 'react';

import RAFFLES from './raffles.json';

export const RaffleStates = {
    PENDIENTE: 'PENDIENTE',
    ENPROGRESO: 'ENPROGRESO',
    SORTEADO: 'SORTEADO'
};

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

    const getNextRaffle = () => {
        return raffles.find((value, index, array)=>{
            return value.estado === RaffleStates.PENDIENTE;
        });
    }

    const setRaffleState = (raffle, state) => {
        const index = raffles.indexOf(raffle);
        raffles[index].estado = state;
    }

    const value = { 
        raffles,
        getNextRaffle,
        setRaffleState,
        running,
        setRunning,
        isLoading,
        setLoadingValue
    };
    return(
        <RaffleContext.Provider value={value}>{children}</RaffleContext.Provider>
    )
}