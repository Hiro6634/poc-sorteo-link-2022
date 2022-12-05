import { useContext } from "react";

var XLSX = require('xlsx');


export const SaveWinners = (winners) => {
    //const {winners} = useContext(WinnerContext);
    console.log(winners);
   
    let filename='Ganadores.xlsx';   
    var ws = XLSX.utils.json_to_sheet(winners);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Ganadores");
    XLSX.writeFile(wb,filename);
    return;
}