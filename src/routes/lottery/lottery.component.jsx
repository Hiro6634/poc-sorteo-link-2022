import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext, useEffect } from 'react';
import { RaffleContext } from '../../context/raffles.context';
import LotteryView from '../../components/lottery-view/lottery-view.component';

import WinnersView from '../../components/winners-view/winners-view.component';

import LotteryFixedScreen from '../../assets/PantallasPremio_Fija.jpg';
// import lotteryMask from '../../assets/MascaraSorteo.png';
import { Sleep } from '../../utils/utils';
import { RaffleStates } from '../../context/raffles.context';

import { RaffleProcess } from '../../business/raffle-process';

import { 
    LotteryContainer,
    RaffleFixScreenContainer
} from './lottery.styles';

const Lottery = () => {
    const {
        raffles,
        getNextRaffle,
        setRaffleState,
        RafflePaused
    } = useContext(RaffleContext);

    useEffect(() => { 
        console.log("DISPLAY HEIGHT:" + window.screen.availHeight);
        console.log("DISPLAY WIDTH:" + window.screen.availWidth);
    },[]);


    return(
        <LotteryContainer>
            <WinnersView winnersList={[]}/>            
        </LotteryContainer>
        );
    

    
}

export default Lottery;