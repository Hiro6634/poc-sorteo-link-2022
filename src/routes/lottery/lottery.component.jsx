import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext, useEffect, useState } from 'react';
import { RaffleContext, RaffleStates } from '../../context/raffles.context';

import WinnersView from '../../components/winners-view/winners-view.component';
import { Sleep } from '../../utils/utils';

import Prize15k from '../../assets/PantallasPremios-15mil.jpg';
import Prize20k from '../../assets/PantallasPremios-15mil.jpg';
import Prize30k from '../../assets/PantallasPremios-30mil.jpg';
import Prize60k from '../../assets/PantallasPremios-60mil.jpg';
import Prize80k from '../../assets/PantallasPremios-80mil.jpg';
import PlacaSorteos from '../../assets/PantallasPremio_Fija.jpg'

import { 
    LotteryContainer,
    WinnersViewContainer,
    RaffleFixScreenContainer,
    PrizeImgContainer,
    NamesLoopContainer,
    PrizeContainer,
    CountdownContainer,
    RaffleTransitionContainer
} from './lottery.styles';

const Lottery = () => {
    const [isBusy, setIsBusy] = useState(false);
    const [winnersList, setWinnersList] = useState([]);
    const [columns, setColumns] = useState(1);
    const [prize, setPrize] = useState();
    const [placa, setPlaca] = useState(false);
    const [index, setIndex] = useState(0);

    const { 
        raffles,
        setRaffleState, 
        isRunning, 
        setIsRunning,
        countdown,
        setCountdown
    } = useContext(RaffleContext);

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
                clearInterval(countdownTimer);
            }
        }, 100);
        await Sleep(raffle.tiempos.placa * 1000);
        setPlaca(false);
        setColumns(raffle.columnas);
        setWinnersList([]);
        setPrize(getRewardImg( raffle.premio));
        console.log("SORTEO: "+ raffle.premio);
        await Sleep(raffle.tiempos.pre * 1000);
        const raffleInterval = setInterval(async ()=>{
            const winner = winners.shift();
            if(winner){
                console.log(winner.apellido + ", "+ winner.nombre);
                addWinner(winner);
            } else {
                clearInterval(raffleInterval);
                setRaffleState(raffle,RaffleStates.SORTEADO);
                await Sleep(raffle.tiempos.pos * 1000);
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
        console.log("DISPLAY HEIGHT:" + window.screen.availHeight);
        console.log("DISPLAY WIDTH:" + window.screen.availWidth);
        console.log("IS RUNNNG:" + isRunning);
        console.log("ISBUSY:" + isBusy);
        console.log("PLACA:" + placa);
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

    const pre = true;

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
                    <PrizeImgContainer src={prize}/>
                </PrizeContainer>
                {
                    pre?(null):(
                    <div>
                    <NamesLoopContainer>
                    <NamesLoop interval={200}/>
                    </NamesLoopContainer>
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