import { useContext } from 'react';
import { EmployeeContext } from '../context/employees.context';
import { WinnerContext } from '../context/winners.context';
import { RaffleStates } from '../context/raffles.context';

import { Sleep } from '../utils/utils';
import { PauseContainer } from '../components/raffle-item/raffle-item.styles';

export const RunRaffleProcess = async (apiRaffleContext, apiWinnerContext, apiEmployeeContext) => {
    const { 
        setRaffleState, 
        getNextRaffle,
        setCurrentRaffle
    } = apiRaffleContext;

    const { setWinnersColumns } = apiWinnerContext;
    
    let raffle = getNextRaffle();
    console.log("START");
    while( raffle !== undefined ){
        setRaffleState(raffle, RaffleStates.ENPROGRESO);
        setCurrentRaffle(raffle);
        setWinnersColumns(raffle.columnas);
        await Sleep(raffle.tiempos.pre*1000)
        console.log("SORTEO!w");
        RaffleProcess( raffle, apiWinnerContext, apiEmployeeContext );

        setRaffleState(raffle, RaffleStates.SORTEADO);
        
        raffle = getNextRaffle();
    }
    console.log("Bye!)");
}

export const RaffleProcess = async (raffle, apiWinnerContext, apiEmployeeContext) => {
    const { addWinner} = apiWinnerContext;
    const raffleTime = (raffle.tiempos.duracion * 1000 ) / raffle.ganadores;

    for( let ix=0; ix < raffle.ganadores; ix++){
        await Sleep(raffleTime);
        const win = GetWinner(apiEmployeeContext);
        // console.log("THE WINNER IS:", win);
        const winner = {
            id: win.id,
            legajo: win.id,
            nombre: win.Nombre,
            apellido: win.Apellido,
            sorteo: raffle.id,
            premio: raffle.premio,
        };
        addWinner(winner);
    }
}

export const GetWinner = (apiEmployeeContext) => {
    const {employees, removeEmployeeByIndex, getEmployeeByIndex } = apiEmployeeContext;
    //TODO: obtener un ganador del listado y eliminarlo del mismo. Pasar el ganador (nombre, apellido, nro del legajo)

   // console.log(employees);
    let indice = Math.floor(Math.random() * employees.length);
    // console.log('indice '+ indice);
    let winner = getEmployeeByIndex(indice);
    // console.log('GANADOR '+ winner.lastName);
    removeEmployeeByIndex(indice);
    // console.log(employees);

    return winner;
}