import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext, useEffect } from 'react';
import { WinnerContext } from '../../context/winners.context';
import { RaffleContext } from '../../context/raffles.context';
import LotteryView from '../../components/lottery-view/lottery-view.component';

import lotteryMask from '../../assets/MascaraSorteo.png';
import { Sleep } from '../../utils/utils';
import { RaffleStates } from '../../context/raffles.context';

import { 
    LotteryContainer,
    Title,
    RaffleTitle,
    RaffleContainer,
    RaffleStaticImage
} from './lottery.styles';

const Lottery = ({award}) => {
    const {winners} = useContext(WinnerContext);
    const {
        running, 
        setRunning, 
        isLoading, 
        setLoadingValue, 
        raffles,
        getNextRaffle,
        setRaffleState
    } = useContext(RaffleContext);
    var starting = true;

    function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time))
    }

    useEffect(() => { 
        ruffleProcess();
    },[]);

    const ruffleProcess = async () => {
        let raffle = getNextRaffle();
        console.log("RAFFLE:", raffle);

        while( raffle !== undefined ){
            setRaffleState(raffle, RaffleStates.ENPROGRESO);
            console.log("PRE");
            await Sleep(raffle.tiempos.pre*1000)
            console.log("SORTEO");
            await Sleep(raffle.tiempos.duracion*1000);
            console.log("FIN DEL SORTEO");
            setRaffleState(raffle, RaffleStates.SORTEADO);
            
            raffle = getNextRaffle();
            console.log("RAFFLE:", raffle);
        }

        console.log("BYE:", raffles);
    }

    return(
        <LotteryContainer>
            <LotteryView/>
        </LotteryContainer>
        );
    

    state = {
        innerWidth: window.innerWidth
    }
}

export default Lottery;