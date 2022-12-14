import { useContext } from 'react';
import { EmployeeContext } from '../context/employees.context';
import { WinnerContext } from '../context/winners.context';
import { RaffleStates } from '../context/raffles.context';

import { Sleep } from '../utils/utils';
import { PauseContainer } from '../components/raffle-item/raffle-item.styles';

export const getWinners = (raffles, addRaffleWinner, apiEmployeeContext) => {
    const winners = [];
    raffles.map((raffle)=>{
        for(let ix = 0; ix < raffle.ganadores; ix++){
            const win = GetWinner(apiEmployeeContext);
            const winner = {
                id: win.id,
                legajo: win.id,
                nombre: win.Nombre,
                apellido: win.Apellido,
                sorteo: raffle.id,
                premio: raffle.premio,
            };
            addRaffleWinner(raffle, winner);
            winners.push(winner);
        }
    });
    return winners;
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