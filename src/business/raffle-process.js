import { useContext } from 'react';
import { EmployeeContext } from '../context/employees.context';
import { WinnerContext } from '../context/winners.context';
import { RaffleStates } from '../context/raffles.context';

import { Sleep } from '../utils/utils';
import { PauseContainer } from '../components/raffle-item/raffle-item.styles';


export const RunRaffleProcess = async (apiRaffleContext, apiWinnerContext, apiEmployeeContext) => {
    const { setRaffleState, getNextRaffle} = apiRaffleContext;
    let raffle = getNextRaffle();

    while( raffle !== undefined ){
        setRaffleState(raffle, RaffleStates.ENPROGRESO);

        await Sleep(raffle.tiempos.pre*1000)

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
        const winner = {
            id: win.id,
            nombre: win.firstName,
            apellido: win.lastName,
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