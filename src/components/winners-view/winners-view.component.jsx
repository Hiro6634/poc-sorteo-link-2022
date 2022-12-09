import { useContext, useEffect, useMemo, useState } from 'react';
import { RaffleContext } from '../../context/raffles.context';
import { WinnerContext } from '../../context/winners.context';
import { WinnersViewContainer } from './winners-view.styles';

const WinnersView = () => {
    const { winColumns, getWinnerByRaffleId, winners } = useContext(WinnerContext);
    const { currentRaffle } = useContext(RaffleContext);
    const [ raffleId, setRaffleId] = useState(1);
    const [ showWinners, setShowWinners] = useState([]);
    const index = useMemo(()=>{
        return(raffleId);
    },[raffleId]);
    useEffect(()=>{
        setShowWinners(getWinnerByRaffleId(raffleId));
    },[winners]);

    useEffect(()=>{
        setRaffleId(currentRaffle.id);
        console.log("INDEX:"+ index);
    },[currentRaffle]);
    return(
        <WinnersViewContainer columns={winColumns}>
        {
            getWinnerByRaffleId(index).map((winner) =>{
                return(<div key={winner.id}>{winner.apellido + ", " + winner.nombre}</div>);
            })
        }|
        </WinnersViewContainer>
    );
} 

export default WinnersView;