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
    const [winColumns, setWinColumns] = useState(0);

    const addWinner =( winner) => {
        setWinners(old=>[...old, winner]);
    }

    const setWinnersColumns = (value) => {
        setWinColumns( value);
    }

    const getWinnerByRaffleId = (raffleID) => {
        return winners.filter((value)=>{
            if(raffleID === undefined || raffleID === null)
                return false;
            return value.sorteo===raffleID;
        },[]);
    }

    const getWinnersToSave = () => {
        return winners;
    }

    const value = {
        winners, 
        addWinner,
        getWinnersToSave,
        getWinnerByRaffleId,
        setWinnersColumns,
        winColumns
    };

    return(
        <WinnerContext.Provider value={value}>{children}</WinnerContext.Provider>
    )
}
