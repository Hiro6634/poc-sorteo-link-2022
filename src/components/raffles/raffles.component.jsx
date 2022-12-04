import { useContext } from 'react';

import RaffleItem from '../raffle-item/raffle-item.component';

import { RaffleContext } from '../../context/raffles.context';

import { 
    RafflesContainer,
    RafflesItems,
    RafflesTitle
} from './raffles.styles';

const Raffles = () => {
    const {raffles} = useContext(RaffleContext);

    return(
        <RafflesContainer>
            <RafflesTitle>SORTEOS</RafflesTitle>
            <RafflesItems>
            {
                raffles.map(raffle=>(<RaffleItem key={raffle.id} id={raffle.id} reward={raffle.premio} maxWinners={raffle.ganadores} state={raffle.estado}/>))
            }            
            </RafflesItems>
        </RafflesContainer>
    );
}

export default Raffles;