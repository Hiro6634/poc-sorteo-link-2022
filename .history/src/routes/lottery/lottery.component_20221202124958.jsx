import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext } from 'react';
import { WinnerContext } from '../../context/winners.context';


import { 
    LotteryContainer,
    Title 
} from './lottery.styles';

const Lottery = () => {
    const {winners} = useContext(WinnerContext);
    console.log("Winners:" + winners.length);
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