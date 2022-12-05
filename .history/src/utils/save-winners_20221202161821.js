import { useContext } from "react";
//import { WinnerContext } from "../context/winners.context";
var XLSX = require('xlsx');


export const SaveWinners = (winners) => {
    //const {winners} = useContext(WinnerContext);
    console.log(winners);
    const reader = XLSX.readFile('Ganadores.xlsx');
    if (reader) {
        console.log('hola');
        console.log(reader);
    }
    else{
        console.log('sarasa');
    }
    let filename='Ganadores.xlsx';   
    var ws = XLSX.utils.json_to_sheet(winners);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Ganadores");
    XLSX.writeFile(wb,filename);
    return;
}