import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext, useEffect, useState } from 'react';
import { RaffleContext } from '../../context/raffles.context';
// import LotteryView from '../../components/lottery-view/lottery-view.component';

import WinnersView from '../../components/winners-view/winners-view.component';

import Reward15k from '../../assets/PantallasPremios-15mil.jpg';
import Reward30k from '../../assets/PantallasPremios-30mil.jpg';
import Reward60k from '../../assets/PantallasPremios-60mil.jpg';
import Reward80k from '../../assets/PantallasPremios-80mil.jpg';
import PlacaSorteos from '../../assets/PantallasPremio_Fija.jpg'
import LotteryFixedScreen from '../../assets/PantallasPremio_Fija.jpg';
// import lotteryMask from '../../assets/MascaraSorteo.png';
import { Sleep } from '../../utils/utils';

// import { RaffleStates } from '../../context/raffles.context';
// import { RaffleProcess } from '../../business/raffle-process';

import { 
    LotteryContainer,
    WinnersViewContainer,
    RaffleFixScreenContainer,
    RewardImgContainer,
    NamesLoopContainer,
    RewardContainer
} from './lottery.styles';

const Lottery = () => {
    const [isBusy, setIsBusy] = useState(false);
    const [isRunning, setIsRunning] = useState(true);
    const [winnersList, setWinnersList] = useState([]);
    const [columns, setColumns] = useState(1);
    const [reward, setReward] = useState();
    const [placa, setPlaca] = useState(false);

    const { raffles } = useContext(RaffleContext);

    const addWinner = (winner) => {
        setWinnersList(old=>[...old, winner]);
    }
    const getRewardImg = (reward) =>{
        switch(reward){
            case "15mil pesos":
                return Reward15k;
            case "30mil pesos":
                return Reward30k;
            case "60mil pesos":
                return Reward60k;
            case "80mil pesos":
                return Reward80k;
        }
    }

    const process =  async (raffle) => {
        setIsBusy(true);
        console.log("...");
        setPlaca(true);
        const winners = raffle.winners;
        const winTimer = (raffle.tiempos.duracion / raffle.ganadores) * 1000;
        await Sleep(raffle.tiempos.placa * 1000);
        setPlaca(false);
        setColumns(raffle.columnas);
        setWinnersList([]);
        setReward(getRewardImg( raffle.premio));
        console.log("SORTEO: "+ raffle.premio);
        await Sleep(raffle.tiempos.pre * 1000);
        const raffleInterval = setInterval(async ()=>{
            const winner = winners.shift();
            if(winner){
                console.log(winner.apellido + ", "+ winner.nombre);
                addWinner(winner);
            } else {
                clearInterval(raffleInterval);
                await Sleep(raffle.tiempos.pre * 1000);
                setIsBusy(false);
            }
        }, winTimer);
    }

    const handleScreenClick = () =>{
        new Promise((resolve, reject)=>{
            setIsRunning(current =>!current);
            resolve("OK");
        }).then(()=>{
            console.log("IsRUNNING:"+isRunning);
        });
    }

    useEffect(() => { 
        // console.log("DISPLAY HEIGHT:" + window.screen.availHeight);
        // console.log("DISPLAY WIDTH:" + window.screen.availWidth);
        let index = 0;
        console.log("IS RUNNNG:" + isRunning);
        console.log("ISBUSY:" + isBusy);
        if( !isRunning) return;
        if(!isBusy){
            if( index < raffles.length ){
                process(raffles[index++]);
            } else {
                setIsRunning(false);
            }
        }
    },[isBusy, isRunning, winnersList]);

//     <LotteryContainer onClick={handleScreenClick}>
//     <RewardContainer>
//         <RewardImgContainer src={reward}/>
//     </RewardContainer>
//     <NamesLoopContainer>
//         <NamesLoop/>
//     </NamesLoopContainer>
//     <WinnersViewContainer>
//         <WinnersView winnersList={winnersList} columns={columns}/>
//     </WinnersViewContainer>
// </LotteryContainer>

    return(<div>
        {
        placa?(<RaffleFixScreenContainer src={PlacaSorteos} alt="Placa"/>):(
            <LotteryContainer>
            <RewardContainer>
                <RewardImgContainer src={reward}/>
            </RewardContainer>
            <NamesLoopContainer>
                <NamesLoop/>
            </NamesLoopContainer>
            <WinnersViewContainer>
                <WinnersView winnersList={winnersList} columns={columns}/>
            </WinnersViewContainer>
        </LotteryContainer>
        )
    }</div>
    );
}

export default Lottery;