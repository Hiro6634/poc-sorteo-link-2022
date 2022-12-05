import { useContext } from "react";
//import { WinnerContext } from "../context/winners.context";


export const SaveWinners = (winners) => {
    //const {winners} = useContext(WinnerContext);
    console.log(winners);
    filename='reports.xlsx';   
    var ws = XLSX.utils.json_to_sheet(winners);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "People");
    XLSX.writeFile(wb,filename);
    return;
}