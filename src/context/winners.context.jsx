import { createContext, useState } from 'react';


export const WinnerContext = createContext({
    
});


// {
//     id: 1,
//     nombre: "Juan",
//     apellido: "Perez",
//     sorteo: 1,
//     premio: "15mil",
// },
// {
//     id: 111,
//     nombre: "Marisa",
//     apellido: "Alvarez",
//     sorteo: 5,
//     premio: "40mil",
// }

export const WinnersProvider = ({children}) => {
    const [winners, setWinners] = useState([]);

    const addWinner =( winner) => {
        console.log("ADD_WINNER:", winner);
        setWinners(old=>[...old, winner]);

    }

    const getWinnerByRaffleId = (raffleID) => {
        return winners.filter((value)=>{
            return value.sorteo===raffleID;
        },[]);
    }

    const value = {
        winners, 
        addWinner,
        getWinnerByRaffleId
    };

    return(
        <WinnerContext.Provider value={value}>{children}</WinnerContext.Provider>
    )
}
