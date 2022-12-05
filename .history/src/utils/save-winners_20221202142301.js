import { useContext } from "react";
import { WinnerContext } from "../context/winners.context";


export const SaveWinners = () => {
    const {winners} = useContext(WinnerContext);
    console.log(winners);
    return;
}