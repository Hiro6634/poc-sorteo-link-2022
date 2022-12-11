import { useContext, useEffect, useMemo, useState } from 'react';
import { RaffleContext } from '../../context/raffles.context';
import { WinnerContext } from '../../context/winners.context';
import { WinnersViewContainer } from './winners-view.styles';

import { Sleep } from '../../utils/utils';

const WinnersView = ({winnersList}) => {
    const { winColumns, getWinnerByRaffleId, winners } = useContext(WinnerContext);
    const { currentRaffle } = useContext(RaffleContext);
    const [ raffleId, setRaffleId] = useState(1);
    const [ showWinners, setShowWinners] = useState([]);

    useEffect(()=>{
        console.log("IN",winnersList);
        const inList = winnersList.winners;
        inList.forEach(winner => {
            Sleep(winnersList.timer).then((winner)=>{
                console.log("WINNER:"+ winner.Apellido);
            })
        });

    },[]);

    // return(
    //     <WinnersViewContainer columns={winColumns}>
    //     {
    //         getWinnerByRaffleId(index).map((winner) =>{
    //             return(<div key={winner.id}>{winner.apellido + ", " + winner.nombre}</div>);
    //         })
    //     }|
    //     </WinnersViewContainer>
    // );
    return (
        <WinnersViewContainer>
            <h2>Winners View</h2>
        </WinnersViewContainer>
    );
} 

export default WinnersView;