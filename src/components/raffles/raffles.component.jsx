import { useContext } from 'react';

import RaffleItem from '../raffle-item/raffle-item.component';

import { RaffleContext } from '../../context/raffles.context';

const Raffles = () => {
    const {raffles} = useContext(RaffleContext);

    return(
        <div>
        {
            raffles.map(raffle=>(<RaffleItem key={raffle.id} reward={raffle.premio} maxWinners={raffle.ganadores} state={raffle.estado}/>))
        }            
        </div>
    );
}

export default Raffles;