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
            lista: [
                "Rodriguez, Marisa ",
                "Suarez, Aldo",
                "Taboada, Alejandra",
                "Fernandez, Mariano",
                "Iodi, Jonathan",
                "Buceta, Diego",
                "Muñiz, Sebastian",
                "Canal, Carlos",
                "Trinidad, Pablo",
                "Tore, Aldo"
            ]
        },
        {
            id: 111,
            nombre: "Marisa",
            apellido: "Alvarez",
            sorteo: 5,
            premio: "40mil",
            lista: [
                "Mirabellis, Ferando",
                "Gracia, Pablo",
                "Pippolo, Laura",
                "Sandrini, Martha",
                "Sosa, Cristian",
                "Milei, Vanesa",
                "Scarso, Irene",
                "Carabajal, Mariano",
                "Benitez, Angel",
                "Iglesias, Sergio"
            ]
        }
    ]);
    const value = {winners};

    return(
        <WinnerContext.Provider value={value}>{children}</WinnerContext.Provider>
    )
}
