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
        console.log("DISPLAY HEIGHT:" + window.screen.availHeight);
        console.log("DISPLAY WIDTH:" + window.screen.availWidth);
    },[]);


    return(
        <LotteryContainer>
            <LotteryView/>
        </LotteryContainer>
        );
    

    
}

export default Lottery;