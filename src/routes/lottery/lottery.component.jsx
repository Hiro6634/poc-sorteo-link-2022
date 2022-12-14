import { useContext, useEffect, useState } from 'react';
import { RaffleContext, RaffleStates } from '../../context/raffles.context';
import { LoopNamesContext } from '../../context/loopnames.context';

import NamesLoop from '../../components/namesloop/namesloop.component';
import WinnersView from '../../components/winners-view/winners-view.component';
import { Sleep } from '../../utils/utils';

import Prize15k from '../../assets/PantallasPremios-15mil.jpg';
import Prize20k from '../../assets/PantallasPremios-20mil.jpg';
import Prize30k from '../../assets/PantallasPremios-30mil.jpg';
import Prize60k from '../../assets/PantallasPremios-60mil.jpg';
import Prize80k from '../../assets/PantallasPremios-80mil.jpg';
import PlacaSorteos from '../../assets/PantallasPremio_Fija.jpg'
import Ganadores from '../../assets/ganadores.jpg';

import { 
    LotteryContainer,
    WinnersViewContainer,
    RaffleFixScreenContainer,
    PrizeImgContainer,
    NamesLoopContainer,
    PrizeContainer,
    CountdownContainer,
    RaffleTransitionContainer,
    WinnerTitleContainer,
    WinnersTitleImgContainer
} from './lottery.styles';

const Lottery = () => {
    const [isBusy, setIsBusy] = useState(false);
    const [winnersList, setWinnersList] = useState([]);
    const [columns, setColumns] = useState(1);
    const [prize, setPrize] = useState();
    const [placa, setPlaca] = useState(false);
    const [pre, setPre] = useState(false);
    const [index, setIndex] = useState(0);
    const interval = 200;

    const { 
        raffles,
        setRaffleState, 
        isRunning, 
        setIsRunning,
        countdown,
        setCountdown
    } = useContext(RaffleContext);

    const { loopNames, rotateNames, findNameById, removeNameByIndex
 } = useContext(LoopNamesContext);

    const addWinner = (winner) => {
        setWinnersList(old=>[...old, winner]);
    }
    const getRewardImg = (reward) =>{
        switch(reward){
            case "15mil pesos":
                return Prize15k;
            case "20mil pesos":
                return Prize20k;
            case "30mil pesos":
                return Prize30k;
            case "60mil pesos":
                return Prize60k;
            case "80mil pesos":
                return Prize80k;
            default:
                return PlacaSorteos;
        }
    }

    const process =  async (raffle) => {
        setIsBusy(true);
        setRaffleState(raffle,RaffleStates.ENPROGRESO);
        console.log("...");
        setPlaca(true);
        const winners = raffle.winners;
        const winTimer = (raffle.tiempos.duracion / raffle.ganadores) * 1000;
        setCountdown(raffle.tiempos.placa * 10);
        const countdownTimer = setInterval(()=>{
            if( countdown>0){
                setCountdown(old=>old-1)
            } else {
                setCountdown(0);
                clearInterval(countdownTimer);
            }
        }, 100);
        await Sleep(raffle.tiempos.placa * 1000);
        setPlaca(false);
        setColumns(raffle.columnas);
        setWinnersList([]);
        setPrize(getRewardImg( raffle.premio));
        console.log("SORTEO: "+ raffle.premio);
        setPre(true);
        await Sleep(raffle.tiempos.pre * 1000);
        setPre(false);
        const raffleInterval = setInterval(async ()=>{
            const winner = winners.shift();
            if(winner){
                console.log(winner.apellido + ", "+ winner.nombre);
                addWinner(winner);
                const ix = loopNames.indexOf(findNameById(winner.id));
                console.log("WINNER:" + winner.id + " " + ix);
                removeNameByIndex(ix);
            } else {
                clearInterval(raffleInterval);
                setRaffleState(raffle,RaffleStates.SORTEADO);
                await Sleep(raffle.tiempos.pos * 1000);
                const rotateItems =  Math.floor(
                    (raffle.tiempos.duracion + raffle.tiempos.pos )
                    * 1000 / interval);
                rotateNames(rotateItems);
                setIsBusy(false);
            }
        }, winTimer);
    }

    // const handleScreenClick = () =>{
    //     new Promise((resolve, reject)=>{
    //         setIsRunning(current =>!current);
    //         resolve("OK");
    //     }).then(()=>{
    //         console.log("IsRUNNING:"+isRunning);
    //     });
    // }

    useEffect(() => { 
        if( !isRunning) return;
        if(!isBusy){
            if( index < raffles.length ){
                const raffle = raffles[index];
                setIndex(index=>(index + 1));
                console.log("INDEX:"+index);
                process(raffle);
            } else {
                setPlaca(true);
                setIsRunning(false);
            }
        }
    },[isBusy, isRunning, winnersList, placa]);

    return(
        <div>
        {
        placa?(
                <RaffleTransitionContainer>
                    <RaffleFixScreenContainer src={PlacaSorteos} alt="Placa"/>
                    <CountdownContainer isCountdown>{Math.floor(countdown/10)+'.'+(countdown%10)}</CountdownContainer>
                </RaffleTransitionContainer>
            ):(
            <LotteryContainer>
                <PrizeContainer>
                    <PrizeImgContainer src={prize} alt='premio'/>
                </PrizeContainer>
                {
                    pre?(null):(
                    <div>
                    <NamesLoopContainer>
                        <NamesLoop interval={interval}/>
                    </NamesLoopContainer>
                    <WinnerTitleContainer>
                        <WinnersTitleImgContainer src={Ganadores} alt='ganadores'/>
                    </WinnerTitleContainer>
                    <WinnersView winnersList={winnersList} columns={columns}/>
                    </div>    
                    )
                }
            </LotteryContainer>
        )
    }</div>
    );
}

export default Lottery;