import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext, useEffect } from 'react';
import { WinnerContext } from '../../context/winners.context';
import { RaffleContext } from '../../context/raffles.context';

import { 
    LotteryContainer,
    Title 
} from './lottery.styles';

const Lottery = () => {
    const {winners} = useContext(WinnerContext);
    const {running, setRunning, raffles} = useContext(RaffleContext);

    // const timerId = setTimeout(()=>{
    //     fetchRunning();
    //     clearTimeout(timerId)
    // },1000);

    console.log("Running:" + raffles.running);

    return(
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
}

export default Lottery;