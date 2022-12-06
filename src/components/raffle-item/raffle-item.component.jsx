import { useContext } from 'react';
import { redirect } from 'react-router-dom';
import { RaffleContext } from '../../context/raffles.context';

import { 
    RaffleItemContainer,
    ItemButton
} from './raffle-item.styles';

const RaffleItem = ({id, reward, maxWinners, state}) => {
    const { running, setRunning, setLoadingValue} = useContext(RaffleContext);

    console.log("RUNNING:" + running.running);

    const handleLaunchButton = () => {
        console.log("SET RUNNING");
        setRunning({running: true});
        setLoadingValue(true);
    }
    return(
        <RaffleItemContainer>
            <span>{id}</span>
            <span>{reward}</span>
            <span>{maxWinners}</span>
            <span>{state}</span>
            <ItemButton 
                enable={state==="PENDIENTE"} 
                onClick={() =>{
                    (state==="PENDIENTE") ?(                    
                        window.confirm("QUIERE LANZAR EL SORTEO NRO: " + id + " ?" ) ?
                        handleLaunchButton() 
                        :
                        console.log(""))
                    :
                    console.log("")
                } }
                to={(state==="PENDIENTE" )?'/lottery':''}
                >
                    LANZAR SORTEO
                </ItemButton>
        </RaffleItemContainer>
    );
}

export default RaffleItem;