import { useContext } from "react";
import fs from 'fs';

var XLSX = require('xlsx');


export const SaveWinners = (winners) => {
    //const {winners} = useContext(WinnerContext);
    console.log(winners);
    let path = 'C:\\Users\\sm_i01785\\Downloads\\Ganadores.xlsx';
    if (fs.readFile(path)) {
        console.log('hola');
        console.log(path);
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