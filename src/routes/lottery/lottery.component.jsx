import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext } from 'react';
import { SorteoContext } from '../../context/sorteos.context';

import { 
    LotteryContainer,
    Title 
} from './lottery.styles';

const Lottery = () => {
    const {sorteos} = useContext(SorteoContext);
    return(
        <div>
            <Title>SORTEO LINK</Title>
            <LotteryContainer>
                <NamesLoop/>
            </LotteryContainer>
            <div>
            {
                sorteos.map((sorteo)=>{
                    <span>{sorteo.premio} {sorteo.ganadores}</span>
                })
            }
            </div>       
        </div>
    );
}

export default Lottery;