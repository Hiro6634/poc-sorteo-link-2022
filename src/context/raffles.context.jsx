import { createContext, useState } from 'react';

import RAFFLES from './raffles.json';

export const RaffleStates = {
    PENDIENTE: 'PENDIENTE',
    ENPROGRESO: 'ENPROGRESO',
    SORTEADO: 'SORTEADO'
};

export const RaffleContext = createContext({
    raffles: []
});

export const RafflesProvider = ({children}) => {
    const [raffles] = useState(RAFFLES);
    const [isRunning, setIsRunning] = useState(false);
    const [countdown, setCountdown] = useState(1);

    const getNextRaffle = () => {
        return raffles.find((value, index, array)=>{
            return value.estado === RaffleStates.PENDIENTE;
        });
    }

    const setRaffleState = (raffle, state) => {
        const index = raffles.indexOf(raffle);
        raffles[index].estado = state;
    }

    const addRaffleWinner = (raffle, winner) => {
        const index = raffles.indexOf(raffle);
        raffles[index].winners.push(winner);
    }

    const value = { 
        raffles,
        getNextRaffle,
        setRaffleState,
        addRaffleWinner,
        isRunning,
        setIsRunning,
        countdown,
        setCountdown
    };
    return(
        <RaffleContext.Provider value={value}>{children}</RaffleContext.Provider>
    )
}