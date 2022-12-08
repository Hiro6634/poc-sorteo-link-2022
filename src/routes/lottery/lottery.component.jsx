import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext, useEffect } from 'react';
import { RaffleContext } from '../../context/raffles.context';
import LotteryView from '../../components/lottery-view/lottery-view.component';

// import lotteryMask from '../../assets/MascaraSorteo.png';
import { Sleep } from '../../utils/utils';
import { RaffleStates } from '../../context/raffles.context';

import { RaffleProcess } from '../../business/raffle-process';

import { 
    LotteryContainer,
} from './lottery.styles';

const Lottery = () => {
    const {
        raffles,
        getNextRaffle,
        setRaffleState
    } = useContext(RaffleContext);

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
            RaffleProcess(raffle);
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
    

    
}

export default Lottery;