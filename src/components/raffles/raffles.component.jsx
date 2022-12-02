import { useContext } from 'react';

import RaffleItem from '../rafle-item/raffle-item.component';

import { RaffleContext } from '../../context/raffles.context';

const Raffles = () => {
    const {raffles} = useContext(RaffleContext);

    //TODO: Mostrar los sorteos
    return(
        <div>
        </div>
    );
}

export default Raffles;