import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext, useEffect } from 'react';
import { WinnerContext } from '../../context/winners.context';
import { RaffleContext } from '../../context/raffles.context';

import lotteryMask from '../../assets/MascaraSorteo.png';

import { 
    LotteryContainer,
    Title 
} from './lottery.styles';

const Lottery = () => {
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
    <div>
        <Title>SORTEO LINK</Title>
        <LotteryContainer>
            <NamesLoop/>
        </LotteryContainer>
        <div style={{color: "black"}}>
        {
            winners.length ? (winners.map(winner=>(
                <div key={winner.id}>
                    <span>{winner.nombre}</span>
                    | 
                    <span>{winner.apellido}</span>
                    | 
                    <span>{winner.premio}</span>
                </div>))) : (<span>No Winner yet</span>)
        }
    </div>
</div>
);

    return(
        isLoading?(<div><img src={lotteryMask} alt='Mascara'></img></div>) :
        (lotteryPage)
        );
    
}

export default Lottery;