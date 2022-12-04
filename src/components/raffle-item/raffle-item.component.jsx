import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RaffleContext } from '../../context/raffles.context';

import { 
    RaffleItemContainer,
    ItemButton
} from './raffle-item.styles';

const RaffleItem = ({id, reward, maxWinners, state}) => {
    const { running, setRunning} = useContext(RaffleContext);
    const handleLaunchButton = () => {
        const value = !running.running;
        setRunning({running: value})
    }
    return(
        <RaffleItemContainer>
            <span>{id}</span>
            <span>{reward}</span>
            <span>{maxWinners}</span>
            <span>{state}</span>
            <ItemButton onClick={handleLaunchButton} to='lottery'>LANZAR SORTEO</ItemButton>
        </RaffleItemContainer>
    );
}

export default RaffleItem;