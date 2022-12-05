import { useContext } from "react";
import { WinnerContext } from "../context/winners.context";


const saveWinners = () => {
    const {winners} = useContext(WinnerContext);
    console.log(winners);
}