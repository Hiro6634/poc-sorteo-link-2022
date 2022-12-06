import { createContext, useState } from 'react';


export const WinnerContext = createContext({
    
});

export const WinnersProvider = ({children}) => {
    const [winners, setWinners] = useState([
        {
            id: 1,
            nombre: "Juan",
            apellido: "Perez",
            sorteo: 1,
            premio: "15mil",
        },
        {
            id: 111,
            nombre: "Marisa",
            apellido: "Alvarez",
            sorteo: 5,
            premio: "40mil",
        }
    ]);

    const addWinner = (winner) => {
        console.log("WINNER:", winner);
        console.log("WINNERS:", winners);
        setWinners(winner);
        console.log("POS WINNERS:", winners);

    }

    const value = {winners, addWinner};

    return(
        <WinnerContext.Provider value={value}>{children}</WinnerContext.Provider>
    )
}
