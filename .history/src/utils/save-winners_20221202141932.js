import { useContext } from "react";
import { WinnerContext } from "../context/winners.context";


export const saveWinners = () => {
    const {winners} = useContext(WinnerContext);
    console.log(winners);
}