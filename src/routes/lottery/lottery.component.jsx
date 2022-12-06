import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext, useEffect } from 'react';
import { WinnerContext } from '../../context/winners.context';
import { RaffleContext } from '../../context/raffles.context';
import WinnersView from '../../components/winners-view/winners-view.component';
import lotteryMask from '../../assets/MascaraSorteo.png';

import { 
    LotteryContainer,
    Title,
    RaffleTitle,
    RaffleContainer
} from './lottery.styles';

const Lottery = ({award}) => {
    const {winners} = useContext(WinnerContext);
    const {running, setRunning, isLoading, setLoadingValue, raffles} = useContext(RaffleContext);
    var starting = true;

    function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time))
    }

    useEffect(() => { 
        const fetchData = async () => {
            await sleep(5000);
            console.log("Time Out!");
            setLoadingValue(false);
        }

        fetchData()
        .catch(console.error);
    },[]);

    console.log("Running:" + running.running);

    const lotteryPage = (        
    <LotteryContainer>
        <Title>
            <h1>
                SORTEO Fiesta LINK 2022
            </h1>
        </Title>
        <RaffleContainer>
            <RaffleTitle><h2>SORTEO: GifCard por 15mil pesos</h2></RaffleTitle>
            <NamesLoop/>
        </RaffleContainer>
        <WinnersView/>
    </LotteryContainer>
);

    return(
        isLoading?
        (<div><img src={lotteryMask} alt='Mascara'></img></div>
        ) :
        (lotteryPage)
        );
    
}

export default Lottery;